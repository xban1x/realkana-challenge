// next.config.js
module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      ...defaultPathMap,
      "/": { page: "/", query: { alphabet: "Hiragana" } }
    };
  }
};
