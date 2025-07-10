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
+ ### `src`

  **type:** `string  **default:** /dat/000.color.name.json `''`

  This argument describes the file location of the color data

    
## Returns
+ ### `clrBit`

  **type:** `{ lst: ColorData  }`
  
