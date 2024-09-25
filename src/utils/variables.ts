const { env } = process as { env: { [key: string]: string } };

export const {
  JWT_SECRET,
  VERIFICATION_LINK,
  PASSWORD_RESET_LINK,
  MONGO_URI,
  MAILTRAP_USER,
  MAILTRAP_PASS,
  CLOUD_NAME,
  CLOUD_KEY,
  CLOUD_SECRET,
} = env;
