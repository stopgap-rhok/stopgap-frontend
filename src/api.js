import { post } from "./utility/http";

export const endpoints = {
  NEW_REPORT:
    "https://us-east4-rhok11-stopgap.cloudfunctions.net/uploadRampRequest",
};

export async function submitReport(data) {
  console.log(data);
  const fd = new FormData();
  const rawBody = {
    businessName: data.business.name,
    businessAddress: data.business.address,
    attachments: [],
    singleStep: data.environment.singleStep,
    nonResidential: data.environment.nonResidential,
    userIsOwner: data.business.userIsOwner,
    canContact: data.contact.canContact,
  };
  fd.set("businessName", data.business.name);
  fd.set("businessAddress", data.business.address);
  fd.set("singleStep", data.environment.singleStep);
  fd.set("nonResidential", data.environment.nonResidential);
  fd.set("canContact", data.contact.canContact);

  if (data.business.details) {
    fd.set("businessDetails", data.business.details);
    rawBody.businessDetails = data.business.details;
  }
  if (data.contact.email) {
    fd.set("userEmail", data.contact.email);
    rawBody.userEmail = data.contact.email;
  }
  fd.set("userIsOwner", data.business.userIsOwner);
  if (data.image) {
    if (data.image.attachments) {
      data.image.attachments.forEach(file => {
        fd.append("attachments", file.blobFile, file.name);
        rawBody.attachments.push(file);
      });
    }
  }
  if (data.additional) {
    if (data.additional.sidewalkFlat) {
      fd.set("sidewalkFlat", data.additional.sidewalkFlat);
      rawBody.sidewalkFlat = data.additional.sidewalkFlat;
    }
    if (data.additional.stepIsWide) {
      fd.set("stepIsWide", data.additional.stepIsWide);
      rawBody.stepIsWide = data.additional.stepIsWide;
    }
    if (data.additional.correctHeight) {
      fd.set("correctHeight", data.additional.correctHeight);
      rawBody.correctHeight = data.additional.correctHeight;
    }
  }

  await post(endpoints.NEW_REPORT, fd, rawBody);
}
