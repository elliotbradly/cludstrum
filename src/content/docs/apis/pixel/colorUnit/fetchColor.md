---
title: fetchColor
description: Loads a json containing color information
---

Loads a json and return a Promise with the color information attached.


## Usage
Here is an example of its basic usage:
```js

import * as ActPxl from "../../../act/pixel.action";

var  bit = await PIXEL.hunt(ActPxl.WRITE_PIXEL, { src:'/dat/000.color.name.json'})

```


## Arguments
+ ### `bale`

  **type:** `Object`

  This argument describes parameters needed to load the color data
  + #### `src`

    **type:** `string  **default:** /dat/000.color.name.json `''`

    Use this option to specify the canvas element where you want to launch the emulator. If it's a string, we will look up the element using `document.querySelector`.

    If it's an empty string, a canvas element will be created automatically and appended to `document.body`.

  
## Returns
+ ### `clrBit`

  **type:** `Object`

  This argument describes parameters needed to load the color data
  + #### `dat`

    **type:** `string  **default:** /dat/000.color.name.json `''`

    Use this option to specify the canvas element where you want to launch the emulator. If it's a string, we will look up the element using `document.querySelector`.

    If it's an empty string, a canvas element will be created automatically and appended to `document.body`.
