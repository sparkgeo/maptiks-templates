# Install

- `npm install` to satisfy node dependancies.
- `gulp serve` to serve up the root directory (on port 3050).
- when testing against the local sliptics-client;
    - replace `paths: { maptiks: '//cdn-dev.maptiks.com/esri3' }` in any template index.html with `paths: { maptiks: '//localhost:3000/src/esri3' }`

# Contributing

- include the original code from ESRI as the first commit before Maptiks enabling a template
- ensure the template points to the dev cdn: `paths: { maptiks: '//cdn-dev.maptiks.com/esri3' }`
