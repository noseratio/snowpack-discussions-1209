module.exports = function plugin (options = {}) {
  return { 
    name: 'rollup-acorn-conf',

    options: (opts) => { 
      console.log("Enabling 'acorn-stage3'...");
      opts.acorn = opts.acorn ?? {};
      opts.acorn.ecmaVersion = 2020;
      opts.acornInjectPlugins = opts.acornInjectPlugins ?? [];
      opts.acornInjectPlugins.push(require('acorn-stage3'));
      return opts;
    }
  };
};
