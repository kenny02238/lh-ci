module.exports = {
  ci: {
    collect: {
      // collect options here
      numberOfRuns: 1,
      startServerCommand: "yarn dev",
      url: ["http://localhost:3000/"],
      settings: {
        output: "json",
        outputPath: "./test", // 自定义输出路径
      },
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
