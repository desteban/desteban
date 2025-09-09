const { SITE_URL } = import.meta.env;

const ENV = {
  SITE_URL,
};

export function getEnvConfig() {
  return ENV;
}
