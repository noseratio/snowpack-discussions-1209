"use strict";

module.exports = function plugin(hostOpts = {}) {
  return { 
    name: 'rollup-acorn-conf',

    options: rollupOpts => { 
      console.log("Enabling 'acorn-stage3'...");
      rollupOpts.acorn = rollupOpts.acorn ?? {};
      rollupOpts.acorn.ecmaVersion = 2020;
      rollupOpts.acornInjectPlugins = rollupOpts.acornInjectPlugins ?? [];
      rollupOpts.acornInjectPlugins.push(require('acorn-stage3'));
      return rollupOpts;
    }
  };
};
