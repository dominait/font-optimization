// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
   "test":{url:'/'},
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    
  },
  buildOptions: {
    out:'public'
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
    splitting:true
  },
};
