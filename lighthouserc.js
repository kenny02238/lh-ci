module.exports = {
  ci: {
    collect: {
      // collect options here
      staticDistDir: ".next/server/app",
    },

    upload: {
      // upload options here
      target: "temporary-public-storage",
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
