module.exports = {
  ci: {
    collect: {
      // collect options here
      staticDistDir: ".next/server/app",
    },
    assert: {
      // assert options here
      preset: "lighthouse:no-pwa",
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
