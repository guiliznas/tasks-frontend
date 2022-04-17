// This is a template for a jsconfig.json file which will be
// generated when starting the dev server or a build.

module.exports = {
  baseUrl: '.',
  include: ['src/**/*', 'tests/**/*'],
  compilerOptions: {
    baseUrl: '.',
    target: 'es5',
    module: 'esnext',
    // ...
    // `paths` will be automatically generated using aliases.config.js
    // ...
  },
}
