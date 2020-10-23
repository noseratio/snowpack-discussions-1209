module.exports = {
  mount: {
    public: "/",
    src: "/_dist_"
  },

  installOptions: {
    rollup: { 
      plugins: [require('rollup-acorn-conf')()]
    }
  }
}
