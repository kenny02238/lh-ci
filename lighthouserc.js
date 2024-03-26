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
      token: "f5333ee7-f7d8-452e-8cda-cd736e48a15f", // build token from lhci wizard
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    },
  },
};
