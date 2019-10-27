import { post } from "./utility/http";

export const endpoints = {
  NEW_REPORT:
    "https://us-east4-rhok11-stopgap.cloudfunctions.net/uploadRampRequest",
};

export async function submitReport(data) {
  const fd = new FormData();
  const rawBody = {
    businessName: data.business.name,
    businessAddress: data.business.address,
    metRequirements: data.metRequirements,
    metRequirements: data.metRequirements,
    attachments: [],
  };
  fd.set("businessName", data.business.name);
  fd.set("businessAddress", data.business.address);
  if (data.business.details) {
    fd.set("businessDetails", data.business.details);
    rawBody.businessDetails = data.business.details;
  }
  fd.set("metRequirements", data.metRequirements);
  if (data.user.email) {
    fd.set("userEmail", data.user.email);
    rawBody.userEmail = data.user.email;
  }
  fd.set("userIsOwner", data.userIsOwner);
  data.image.attachments.forEach(file => {
    fd.append("attachments", file.blobFile, file.name);
    rawBody.attachments.push(file);
  });

  await post(endpoints.NEW_REPORT, fd, rawBody);
}
