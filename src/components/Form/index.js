import React, { useState, useMemo, useRef, forwardRef } from "react";

import {
  Schema,
  Form as RForm,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  CheckboxGroup,
  Button,
  Uploader,
} from "rsuite";

import styles from "./css/Form.module.scss";

const t = Schema.Types;

const businessSchema = {
  name: t.StringType().isRequired("Business name is required"),
  address: t.StringType().isRequired("Business address is required"),
  details: t.StringType(),
};

const userSchema = {
  name: t.StringType(),
  email: t.StringType().isEmail("Invalid email address"),
  // confirmations: t.ArrayType(),
};

const imageSchema = {
  attachments: t.ArrayType(),
};

const schema = Schema.Model({
  business: t
    .ObjectType()
    .shape(businessSchema)
    .isRequired(),
  user: t
    .ObjectType()
    .shape(userSchema)
    .isRequired(),
  image: t
    .ObjectType()
    .shape(imageSchema)
    .isRequired(),
  extraInfo: t.StringType(),
});

const stepNames = ["BUSINESS_INFO", "USER_INFO", "IMAGE"];

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
  const [state, setState] = useState({
    metRequirements: [],
    userIsOwner: false,
    image: {},
    user: {},
    business: {},
  });

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
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
      {step === steps.BUSINESS_INFO && (
        <BusinessInfoForm
          value={state.business}
          onChange={updater("business")}
          onSubmit={next}
          goBack={back}
        />
      )}
      {step === steps.USER_INFO && (
        <UserForm
          value={state.user}
          onChange={updater("user")}
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
    </>
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
      heading="Business Information"
    >
      <FormGroup>
        <ControlLabel>
          Name
          <FormControl name="name" />
        </ControlLabel>
      </FormGroup>
      <FormGroup>
        <ControlLabel>
          Address
          <FormControl name="address" />
        </ControlLabel>
      </FormGroup>
    </StepForm>
  );
}

function UserForm({ goBack, value, onChange, onSubmit }) {
  return (
    <StepForm
      schema={userSchema}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      step={steps.USER_INFO}
      goBack={goBack}
      heading="User Information"
    >
      <FormGroup>
        <ControlLabel>
          Name
          <FormControl name="name" />
        </ControlLabel>
      </FormGroup>
      <FormGroup>
        <ControlLabel>
          Email
          <FormControl name="email" />
        </ControlLabel>
      </FormGroup>
      {/*<FormGroup>
        <FormControl accepter={CheckboxGroup} name="confirmations">
          <Checkbox value="spokenToBusiness">
            Have you spoken to the business about ?
          </Checkbox>
          <Checkbox value="mentionedStopgap">
            Have you spoken to the business about StopGap?
          </Checkbox>
        </FormControl>
        </FormGroup>*/}
    </StepForm>
  );
}

function ImageForm({ goBack, value, onChange, onSubmit }) {
  return (
    <StepForm
      heading="IMage"
      schema={imageSchema}
      step={steps.IMAGE}
      onSubmit={onSubmit}
      onChange={onChange}
      value={value}
      goBack={goBack}
    >
      <FormControl
        accepter={Uploader}
        accept="image/*"
        listType="picture"
        multiple
        name="attachments"
        autoUpload={false}
        removable
      />
    </StepForm>
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
    >
      {children}
    </SubForm>
  );
}

const SubForm = forwardRef(function SubForm(
  { children, heading, step, goBack, ...formProps },
  ref,
) {
  return (
    <RForm ref={ref} {...formProps}>
      <h2>{heading}</h2>
      {children}
      <div className={styles.buttonContainer}>
        {step !== firstStep && (
          <Button
            appearance="subtle"
            size="lg"
            type="button"
            onClick={() => goBack(step)}
          >
            Back
          </Button>
        )}
        <Button
          appearance="primary"
          size="lg"
          type="submit"
          className={styles.submit}
        >
          {step === lastStep ? "Submit" : "Next"}
        </Button>
      </div>
    </RForm>
  );
});
