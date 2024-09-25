import nodemailer from "nodemailer";
import { MAILTRAP_PASS, MAILTRAP_USER } from "./variables";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASS,
  },
});

const sendVerification = async (email: string, link: string) => {
  await transport.sendMail({
    from: "verification@myapp.com",
    to: email,
    html: `<h1>Please click on <a href="${link}">this link</a> to verify your account.</h1>`,
  });
};

const sendPasswordResetLink = async (email: string, link: string) => {
  await transport.sendMail({
    from: "security@myapp.com",
    to: email,
    html: `<h1>Please click on <a href="${link}">this link</a> to update your password.</h1>`,
  });
};

const sendPasswordUpdateMessage = async (email: string) => {
  await transport.sendMail({
    from: "security@myapp.com",
    to: email,
    html: `<h1>Your password is updated, you can now use your new password.</h1>`,
  });
};

const mail = {
  sendVerification,
  sendPasswordResetLink,
  sendPasswordUpdateMessage,
};

export default mail;
