# Nava Solutions
Nava Solutions is committed to develop software applications which accelerate the adoption of cloud solutions in a secure manner. The Nava Solutions software team produces solid, high-level and professional products which are easy to use at the same time.

## Usage
### Prerequisites
Install the latest version of [Hugo](https://gohugo.io/getting-started/installing/).

[npm](https://docs.npmjs.com/getting-started/what-is-npm) is used to managed dependencies. To asure compatibility, version 8.14.0 of node and version 6.4.1 of npm are recommended. You can manage node versions using [nvm](https://github.com/creationix/nvm#installation). Once installed, you can use the config file on the repo to install and download the recommeneded node/npm version.

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

### Development
Running the local server can be done the following two commands: `gulp watch` on one terminal window and `hugo server` on another. The former watches any changes done to critical CSS files. The latter runs a local server with live reload for the site itself.

The project should be available on [localhost:3000](localhost:3000) from your browser.

## Structure
```
|--assets           // Files that will pass through the asset pipeline
|  |--icons         // Icons files in the root of this folder will be minified, fingerprinted, and end up in /icons/...
|  |--img      	    // Image files in the root of this folder will be minified, fingerprinted, and end up in /img/...
|  |--js      	    // JS files in the root of this folder will be optimized, fingerprinted, and  end up in /js/...
|  |--css          // Sass files in the root of this folder will be compiled, minified, fingerprinted, and end up in /scss/...
|--content          // Pages and collections
|--layouts          // This is where all templates go
|  |--_default      // This is where base templates and blocks live
|  |--partials      // This is where includes live
|  |--shortcodes    // This is where shortcodes live
|  |--index.html    // The index page
|--static     	    // Files in here end up in the public folder
```