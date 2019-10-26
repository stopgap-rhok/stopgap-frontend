import { post } from "./utility/http";

export const endpoints = {
  NEW_REPORT: "ntiesrnaeitosn",
};

export async function submitReport(data) {
  const fd = new FormData();

  fd.set("businessName", data.business.name);
  fd.set("businessAddress", data.business.address);
  if (data.business.details) {
    fd.set("businessDetails", data.business.details);
  }
  fd.set("metRequirements", data.metRequirements);
  if (data.user.email) {
    fd.set("userEmail", data.user.email);
  }
  fd.set("userIsOwner", data.userIsOwner);
  data.image.attachments.forEach(file => {
    fd.append("attachments[]", file.blobFile, file.name);
  });

  await post(endpoints.NEW_REPORT, fd);
}
