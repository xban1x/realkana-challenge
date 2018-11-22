const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({
  exportPathMap: async function(defaultPathMap) {
    return {
      ...defaultPathMap,
      "/": { page: "/", query: { alphabet: "Hiragana" } }
    };
  }
});
