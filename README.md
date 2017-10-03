# react-usa-map | A simple SVG USA map rendering on React

[![Build Status](https://travis-ci.org/gabidavila/react-usa-map.svg?branch=master)](https://travis-ci.org/gabidavila/react-usa-map)

This is an alternate version for you that just want a simple customizable map on HTML. This maps shows states delimitations including DC, Hawaii and Alaska. D3 is not needed.

## [Live Example](http://react-usa-map-demo.herokuapp.com)
Code: [http://github.com/gabidavila/react-usa-map-demo](http://github.com/gabidavila/react-usa-map-demo)

## Installation

It requires `react` 15.4.2 or higher. Run:

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

  /* optional customization of filling per state */
  statesFilling = () => {
    return {
      "NJ": {
        fill: "navy"
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
      <div className="App">
        <USAMap customize={this.statesFilling()} onClick={this.mapHandler} />
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

# License

This project is license is MIT, for more information please refer to [license](LICENSE.md).

The map is sourced from [wikimedia](https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg) and is under [Creative Commons Attribution-Share Alike 3.0 Unported](https://spdx.org/licenses/CC-BY-SA-3.0.html) license.

# Contributing

Fork and PR.

# Maintainer

Package maintaned by Gabriela D'Ávila Ferrara, [website](http://gabriela.io).
