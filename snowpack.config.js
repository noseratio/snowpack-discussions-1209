module.exports = {
  mount: {
    public: "/",
    src: "/_dist_"
  },

  installOptions: {
    rollup: { 
      plugins: [require('@noseratio/rollup-acorn-conf')()]
    }
  }
}
