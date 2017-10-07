# react-usa-map | A simple SVG USA map rendering on React

[![Build Status](https://travis-ci.org/gabidavila/react-usa-map.svg?branch=master)](https://travis-ci.org/gabidavila/react-usa-map) [![codebeat badge](https://codebeat.co/badges/edd62a75-c313-47c7-b239-d1d1848d3621)](https://codebeat.co/projects/github-com-gabidavila-react-usa-map-master)

This is an alternate version for you that just want a simple customizable map on HTML. This maps shows states delimitations including DC, Hawaii and Alaska. D3 is not needed.

## [Live Example](http://react-usa-map-demo.herokuapp.com)
Live: [http://react-usa-map-demo.herokuapp.com](http://react-usa-map-demo.herokuapp.com)

Code: [http://github.com/gabidavila/react-usa-map-demo](http://github.com/gabidavila/react-usa-map-demo)

## Installation

It requires `react` 15.4.2 or higher, compatible with React 16.0.0. Run:

`yarn add react-usa-map`

or

`npm install react-usa-map --save`

## Usage

The below example shows the mandatory `onClick` event.

```javascript
import React, { Component } from 'react';
import USAMap from "react-usa-map";

class App extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  render() {
    return (
      <div className="App">
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}

export default App;
```

Example with optional props, `App.js`:

```javascript
import React, { Component } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";

class App extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
      <div className="App">
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
    );
  }
}

export default App;
```

`App.css`:

```css
path {
  pointer-events: all;
}
path:hover {
  opacity: 0.50;
  cursor: pointer;
}
```

## All optional props:

|prop|description|
|----|-----------|
|`title`| Content for the Title attribute on the `svg`|
|`width`| The `width` for rendering, numeric, no `px` suffix|
|`height`| The `height` for rendering, numeric, no `px` suffix|
|`defaultFill`| The default color for filling|
|`customize`| Optional customization of filling per state |

Additionally each `path` tag has an abbreviation of the current state followed by a `state` class:

```html
<path fill="#{custom color or #D3D3D3}" data-name="CA" class="CA state" d="...{polygon dimensions here}..."></path>
```

# License & Sources

This project is license is MIT, for more information please refer to [license](LICENSE.md).

The map is sourced from [wikimedia](https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg) and is under [Creative Commons Attribution-Share Alike 3.0 Unported](https://spdx.org/licenses/CC-BY-SA-3.0.html) license. This package is inspired on the [react-us-state-map](https://wwcw.npmjs.com/package/react-us-state-map) package, in fact the initial SVG class system is based on it.

# Contributing

Fork and PR. Not much fuss, I will be try to be as responsive as possible.

# Maintainer

Package maintaned by Gabriela D'Ávila Ferrara, [website](http://gabriela.io).
