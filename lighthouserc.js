module.exports = {
  ci: {
    collect: {
      // collect options here
      numberOfRuns: 1,
      startServerReadyPattern: "Local",
      startServerCommand: "yarn dev",
      url: ["http://localhost:3000/"],
    },

    upload: {
      // upload options here
      // target: "temporary-public-storage",
      target: "lhci",
      serverBaseUrl: "http://localhost:9001",
      token: "d2075ad3-ea93-45b6-91f5-97a44c40267d", // build token from lhci wizard
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
