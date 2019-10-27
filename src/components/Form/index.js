import React, { useState, useMemo, useRef, forwardRef } from "react";
import cx from "classnames";
import {
  Schema,
  Form as RForm,
  FormGroup,
  FormControl,
  Icon,
  ControlLabel,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Button,
  Uploader,
} from "rsuite";

import styles from "./css/Form.module.scss";

const t = Schema.Types;

const environmentSchema = {
  singleStep: t.BooleanType().isRequired("This field is required"),
  nonResidential: t.BooleanType().isRequired("This field is required"),
};

const businessSchema = {
  name: t.StringType().isRequired("Business name is required"),
  address: t.StringType().isRequired("Business address is required"),
  userIsOwner: t.BooleanType().isRequired("This field is required"),
};

const imageSchema = {
  attachments: t.ArrayType(),
};

const additionInfoSchema = {
  sidewalkFlat: t.BooleanType(),
  stepIsWide: t.BooleanType(),
  correctHeight: t.BooleanType(),
};

const contactSchema = {
  canContact: t.BooleanType().isRequired("This field is required"),
  email: t.StringType().isEmail("Invalid email address"),
};

const schema = Schema.Model({
  environment: t
    .ObjectType()
    .shape(environmentSchema)
    .isRequired(),
  business: t
    .ObjectType()
    .shape(businessSchema)
    .isRequired(),
  contact: t
    .ObjectType()
    .shape(contactSchema)
    .isRequired(),
  info: t
    .ObjectType()
    .shape(additionInfoSchema)
    .isRequired(),
  image: t
    .ObjectType()
    .shape(imageSchema)
    .isRequired(),
  extraInfo: t.StringType(),
});

const stepNames = [
  "ENVIRONMENT_INFO",
  "BUSINESS_INFO",
  "IMAGE",
  "ADDITIONAL_INFO",
  "CONTACT_INFO",
];

const steps = stepNames.reduce((acc, name, i) => ({ ...acc, [name]: i }), {});

const firstStep = steps[stepNames[0]];
const lastStep = steps[stepNames[stepNames.length - 1]];

function nextStep(currentStep) {
  console.assert(currentStep < lastStep);
  return currentStep + 1;
}

function previousStep(currentStep) {
  console.assert(currentStep > firstStep);
  return currentStep - 1;
}

export default function Form({ onSubmit }) {
  const [step, setStep] = useState(firstStep);
  const [state, setState] = useState({});

  function updater(name) {
    return function update(value) {
      setState({ ...state, [name]: value });
    };
  }

  function next(currentStep) {
    if (currentStep === lastStep) {
      onSubmit(state);
    } else {
      setStep(nextStep(currentStep));
    }
  }

  function back(currentStep) {
    setStep(previousStep(currentStep));
  }

  return (
    <>
      {step === steps.ENVIRONMENT_INFO && (
        <EnvironmentInfoForm
          value={state.environment}
          onChange={updater("environment")}
          onSubmit={next}
          goBack={back}
        />
      )}
      {step === steps.BUSINESS_INFO && (
        <BusinessInfoForm
          value={state.business}
          onChange={updater("business")}
          onSubmit={next}
          goBack={back}
        />
      )}
      {step === steps.IMAGE && (
        <ImageForm
          value={state.image}
          onChange={updater("image")}
          onSubmit={next}
          goBack={back}
        />
      )}
      {step === steps.ADDITIONAL_INFO && (
        <AdditionalInfoForm
          value={state.additional}
          onChange={updater("additional")}
          onSubmit={next}
          goBack={back}
        />
      )}
      {step === steps.CONTACT_INFO && (
        <ContactForm
          isOwner={state.business.userIsOwner}
          value={state.contact}
          onChange={updater("contact")}
          onSubmit={next}
          goBack={back}
        />
      )}
    </>
  );
}

function YesOrNo({ children, className, ...props }) {
  return (
    <FormGroup>
      <p className={styles.question}>{children}</p>
      <FormControl
        className={cx(className, styles.radioGroup)}
        accepter={RadioGroup}
        {...props}
      >
        <Radio className={styles.radio} value={true}>
          Yes.
        </Radio>
        <Radio className={styles.radio} value={false}>
          No.
        </Radio>
      </FormControl>
    </FormGroup>
  );
}

function EnvironmentInfoForm({ goBack, value, onChange, onSubmit }) {
  return (
    <StepForm
      schema={environmentSchema}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      step={steps.ENVIRONMENT_INFO}
      goBack={goBack}
      heading="Tell us about an Ottawa business that could use a StopGap ramp."
    >
      <YesOrNo name="singleStep">
        Is the location inaccessible due to a single step?
      </YesOrNo>
      <YesOrNo name="nonResidential">Is the location non-residential?</YesOrNo>
    </StepForm>
  );
}

function BusinessInfoForm({ goBack, value, onChange, onSubmit }) {
  return (
    <StepForm
      schema={businessSchema}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      step={steps.BUSINESS_INFO}
      goBack={goBack}
      heading="Where would you like a ramp?"
      subheading="* mandatory"
    >
      <FormGroup>
        <ControlLabel className={styles.label}>
          Business name *
          <FormControl name="name" />
        </ControlLabel>
      </FormGroup>
      <FormGroup>
        <ControlLabel className={styles.label}>
          Address *
          <FormControl name="address" />
        </ControlLabel>
      </FormGroup>
      <YesOrNo name="userIsOwner">Are you the owner of this business?</YesOrNo>
    </StepForm>
  );
}

function AdditionalInfoForm({ goBack, value, onChange, onSubmit }) {
  return (
    <div className={styles.additionInfo}>
      <StepForm
        schema={additionInfoSchema}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        step={steps.ADDITIONAL_INFO}
        goBack={goBack}
        heading="Give us some extra information."
      >
        <YesOrNo name="sidewalkFlat">Is the sidewalk flat?</YesOrNo>
        <YesOrNo name="stepIsWide">Is the step 34 inches or wider?</YesOrNo>
        <YesOrNo name="correctHeight">
          Is the step taller than 2 inches and shorter than 9 inches?
        </YesOrNo>
      </StepForm>
    </div>
  );
}

function ContactForm({ isOwner, goBack, value, onChange, onSubmit }) {
  return (
    <StepForm
      schema={
        isOwner
          ? {
              ...contactSchema,
              email: t
                .StringType()
                .isEmail()
                .isRequired("This field is required"),
            }
          : contactSchema
      }
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      step={steps.CONTACT_INFO}
      goBack={goBack}
      heading={
        isOwner
          ? "We'll drop you a line soon."
          : "Can we contact you about this request?"
      }
    >
      {isOwner || (
        <YesOrNo name="canContact">
          Can we contact you about this request?
        </YesOrNo>
      )}
      <FormGroup>
        <ControlLabel>
          Email address
          <FormControl name="email" isRequired={isOwner} />
        </ControlLabel>
      </FormGroup>
    </StepForm>
  );
}

function ImageForm({ goBack, value, onChange, onSubmit }) {
  return (
    <div className={styles.imageForm}>
      <StepForm
        heading="Add a photo or two."
        schema={imageSchema}
        step={steps.IMAGE}
        onSubmit={onSubmit}
        onChange={onChange}
        value={value}
        goBack={goBack}
      >
        <p className={styles.imagequestion}>
          Be sure to show the step and entryway.
        </p>
        <FormControl
          accepter={Uploader}
          accept="image/*"
          listType="picture"
          multiple
          name="attachments"
          autoUpload={false}
          removable
        ></FormControl>
      </StepForm>
    </div>
  );
}

function StepForm({
  children,
  goBack,
  value,
  onChange,
  onSubmit,
  step,
  schema,
  heading,
  ...props
}) {
  const form = useRef(null);
  const schemuh = useMemo(() => Schema.Model(schema), [schema]);

  function submit(e) {
    e.preventDefault();

    if (form.current.check()) {
      onSubmit(step);
    }
  }

  return (
    <SubForm
      ref={form}
      fluid
      model={schemuh}
      formValue={value}
      onChange={onChange}
      onSubmit={submit}
      step={step}
      goBack={goBack}
      heading={heading}
      {...props}
    >
      {children}
    </SubForm>
  );
}

const SubForm = forwardRef(function SubForm(
  { children, className, heading, subheading, step, goBack, ...formProps },
  ref,
) {
  return (
    <RForm ref={ref} className={cx(styles.container, className)} {...formProps}>
      <h2 className={styles.heading}>
        {heading}
        {subheading && (
          <small className={styles.subheading}>{subheading}</small>
        )}
      </h2>
      {children}
      <div className={styles.buttonContainer}>
        {step !== firstStep && (
          <Button
            appearance="subtle"
            size="lg"
            type="button"
            onClick={() => goBack(step)}
            className={styles.navbutton}
          >
            &lt; Back
          </Button>
        )}
        <Button
          appearance="primary"
          size="lg"
          type="submit"
          className={cx(styles.submit, {
            [styles.actuallySubmit]: step === lastStep,
          })}
        >
          {step === lastStep ? "Submit." : "Next >"}
        </Button>
      </div>
    </RForm>
  );
});
