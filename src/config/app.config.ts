export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb_uri: process.env.MONGODB_URI,
  port: process.env.PORT || 3002,
  defaultlimit: process.env.DEFAULT_LIMIT || 7,
});
