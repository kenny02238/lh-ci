module.exports = {
  ci: {
    collect: {
      // collect options here
      numberOfRuns: 1,
      startServerCommand: "yarn dev",
      url: ["http://localhost:3000/"],
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
