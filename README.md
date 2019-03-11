# Nava Solutions
Nava Solutions is committed to develop software applications which accelerate the adoption of cloud solutions in a secure manner. The Nava Solutions software team produces solid, high-level and professional products which are easy to use at the same time.

## Usage
This is a high level view of the a local build setup. For more detailed information, check out the [Wiki](https://github.com/fourjuaneight/nava-solutions/wiki/Build-Process)

### Prerequisites
Install the latest version of [Hugo](https://gohugo.io/getting-started/installing/).

[npm](https://docs.npmjs.com/getting-started/what-is-npm) is used to managed dependencies. To ensure compatibility, version 10.15.1 of node and version 6.7.0 of npm are recommended. You can manage node versions using [nvm](https://github.com/creationix/nvm#installation).

[Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) v4 is used for various tasks. It compiles the critical Sass and outputs a minified HTML partial that is added to the `baseOf.html` template head for inlined critical CSS. It watches for changes in JavaScript and runs Webpacks. And lastly, it optimizes images.

[Webpack](https://webpack.js.org/concepts) is used to import external libraries, bundle, and minify all our JavaScript assets. The output is a bundled and minified file that is readable on all browsers. The file can be found in `/assets/js/bundle.js`.

**Note:** Bundling and minification are possible with Hugo Pipes. However, in order to import our external libraries as well, Webpack is used instead. The output file is then called via Hugo Pipes.

### Installation
From the root directory of the repo, run the install command for the recommended node version:
```
nvm install
```

Then, tell nvm to use that version:
```
nvm use
```

Once those are set, run npm to install all dependencies:
```
npm install
```

## Structure
```
|--assets           // Files that will pass through the asset pipeline
|  |--icons         // Icons files used for favicon, iOS webclip, OpenGraph icons, and other alike.
|  |--fonts         // Font files.
|  |--img           // Image files.
|  |  |--hero       // Hero background image files.
|  |  |--partners   // Partner logos image files.
|  |--js            // Custom scripts and external libraries minified and locally loaded.
|  |--css           // Sass files are compiled, minified and autoprefixed.
|--content          // Pages and collections
|--layouts          // This is where all templates go
|  |--_default      // This is where base templates and blocks live
|  |--partials      // This is where includes live
|  |--shortcodes    // This is where shortcodes live
|  |--index.html    // The index page
|--static           // Files in here end up in the public folder
```