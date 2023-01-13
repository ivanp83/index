/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      i18n: {
        locales: ["en", "ru"],
        defaultLocale: "ru",
      },
      env: {
        DATABASE_URL: "mongodb://localhost:27017/ivanpozdnyakov",
      },
    };
  }

  return {
    output: "standalone",
    reactStrictMode: true,
    i18n: {
      locales: ["en", "ru"],
      defaultLocale: "ru",
    },
    env: {
      DATABASE_URL: "mongodb://localhost:27017/ivanpozdnyakov",
    },
  };
};
