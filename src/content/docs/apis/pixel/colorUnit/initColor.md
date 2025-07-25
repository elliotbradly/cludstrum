---
title: initColor
description: Calculates the sum of an array of numbers.
---

Launch an emulator and return a Promise of the emulator instance.

:::tip
Consider using [`Nostalgist.prepare`](/apis/prepare/) and [`<instance>.start`](/apis/start/) instead of this method if you need to load files through a network.
:::

## Usage
Here is an example of its basic usage:
```js
const nostalgist = await Nostalgist.launch({
  core: 'fceumm',
  rom: 'flappybird.nes',
})
```

A more complex example:

```js
const nostalgist = await Nostalgist.launch({
  element: document.querySelector('.emulator-canvas'),

  // Will load https://example.com/core/fbneo_libretro.js and https://example.com/core/fbneo_libretro.wasm as the launching core
  // Because of the custom `resolveCoreJs` and `resolveCoreWasm` options
  core: 'fbneo',

  // Will load https://example.com/roms/mslug.zip as the ROM
  // Because of the custom `resolveRom` option
  rom: ['mslug.zip'],

  // Will load https://example.com/system/neogeo.zip as the BIOS
  // Because of the custom `resolveBios` option
  bios: ['neogeo.zip'],

  // Custom configuration for RetroArch
  retroarchConfig: {
    rewind_enable: true,
    savestate_thumbnail_enable: true,
  },

  // Specify where to load the core files
  resolveCoreJs(core) {
    return `https://example.com/core/${core}_libretro.js`
  },
  resolveCoreWasm(core) {
    return `https://example.com/core/${core}_libretro.wasm`
  },

  // Specify where to load the ROM files
  resolveRom(file) {
    return `https://example.com/roms/${file}`
  },

  // Specify where to load the BIOS files
  resolveBios(bios) {
    return `https://example.com/system/${bios}`
  },
})
```

## Arguments
+ ### `options`

  **type:** `Object`

  This argument describes how the emulator and game will be launched.
  + #### `element`

    **type:** `string | HTMLCanvasElement` **default:** an empty string `''`

    Use this option to specify the canvas element where you want to launch the emulator. If it's a string, we will look up the element using `document.querySelector`.

    If it's an empty string, a canvas element will be created automatically and appended to `document.body`.

  + #### `core`

    **type:**
    <code>
      string | { name: string, js: [resolvable file](/apis/resolvable-file), wasm: [resolvable file](/apis/resolvable-file) }
    </code>

    The core represents the emulator we are going to use. Since we are using RetroArch compiled by Emscripten under the hood, we need to pass the compiled js file and wasm file here.

    If you pass a `string` here, by default, we will look up the corresponding core at this GitHub repository [retroarch-emscripten-build](https://github.com/arianrhodsandlot/retroarch-emscripten-build), which contains the official build cores from [libretro buildbot](https://buildbot.libretro.com/stable/), and then the core will be loaded via jsDelivr, a public free CDN that can load files from GitHub with CORS support.

    For example, if you pass `snes9x` here, these 2 files will be loaded:
    + [snes9x_libretro.js](https://cdn.jsdelivr.net/gh/arianrhodsandlot/retroarch-emscripten-build@v1.21.0/retroarch/snes9x_libretro.js)
    + [snes9x_libretro.wasm](https://cdn.jsdelivr.net/gh/arianrhodsandlot/retroarch-emscripten-build@v1.21.0/retroarch/snes9x_libretro.wasm)

    That's because there is a default `resolveCoreJs` option that can resolve `string`s like `snes9x` to links above. By default, we support these cores from [retroarch-emscripten-build](https://github.com/arianrhodsandlot/retroarch-emscripten-build):
    > 2048, arduous, bk, bluemsx, chailove, craft, ecwolf, fbalpha2012_cps1, fbalpha2012_cps2, fbalpha2012, fbalpha2012_neogeo, fceumm, freechaf, galaksija, gambatte, gearboy, gearcoleco, gearsystem, genesis_plus_gx, genesis_plus_gx_wide, gme, gong, gw, handy, jaxe, jumpnbump, lowresnx, lutro, mame2000, mame2003, mame2003_plus, mednafen_lynx, mednafen_ngp, mednafen_pce_fast, mednafen_vb, mednafen_wswan, mgba, minivmac, mrboom, mu, neocd, nestopia, numero, nxengine, o2em, opera, pcsx_rearmed, picodrive, pocketcdg, prboom, quasi88, quicknes, retro8, snes9x2002, snes9x2005, snes9x2010, snes9x, squirreljme, tgbdual, theodore, tic80, tyrquake, uw8, uzem, vaporspec, vba_next, vecx, vice_x128, vice_x64, vice_x64sc, vice_xcbm2, vice_xcbm5x0, vice_xpet, vice_xplus4, vice_xscpu64, vice_xvic, virtualxt, vitaquake2-rogue, vitaquake2-xatrix, vitaquake2-zaero, vitaquake2, wasm4, x1, xrick

    If you want to specify how to use your custom cores, you can implement a custom `resolveCoreJs` yourself to achieve this.

    You can also pass an `Object` instead of a `string` to load data from custom URLs as the core. Here's an example:
    ```js
    await Nostalgist.launch({
      core: {
        js: 'https://example.com/cores/snes9x.js',
        name: 'snes9x',
        wasm: 'https://example.com/cores/snes9x.wasm',
      },
      rom: 'https://example.com/roms/super-metroid.sfc',
    })
    ```
    The `core.js` and `core.wasm` options can be a [resolvable file](/apis/resolvable-file) as well.

  + #### `rom`

    **type:**
    <code>
      [resolvable file](/apis/resolvable-file) | Array
    </code>

    The game ROM file.

    If it's a `string` and starts with `https://` or `http://` or `//`, it will be treated as a URL, and a request will be made to load the ROM from that URL.
    Otherwise, it will be passed to the `resolveRom` option to load the ROM.

    There is a default `resolveRom` mechanism that can load free ROMs from [retrobrews](https://retrobrews.github.io/), a project hosting lots of free homebrew ROMs. For example,
    ```js
    await Nostalgist.launch({
      core: 'fceumm',
      rom: 'flappybird.nes',
    })
    ```
    This will load `flappybird.nes` from the repository [retrobrews/nes-games](https://github.com/retrobrews/nes-games).

    We will use the extension name of the `rom` option to determine which repository to load the ROM from. Here is the related code implementation:
    ```js
    const romRepo = {
      '.bin': 'retrobrews/md-games',
      '.gb': 'retrobrews/gbc-games',
      '.gba': 'retrobrews/gba-games',
      '.gbc': 'retrobrews/gbc-games',
      '.md': 'retrobrews/md-games',
      '.nes': 'retrobrews/nes-games',
      '.sfc': 'retrobrews/snes-games',
      '.sms': 'retrobrews/sms-games',
    }[extension]
    ```

    You can also pass a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) object or an object with `fileName` and `fileContent` properties. The file name will be preserved when being loaded into the file system of the emulator.

    In some circumstances, you may want to launch multiple ROMs simultaneously, for example, for some arcade games with a "parent" ROM. Then you can pass an Array of any of the above.

  + #### `bios`

    **type:**
    <code>
      [resolvable file](/apis/resolvable-file) | Array
    </code>

    Basically, it's the same as the `rom` option. Files passed here will be written to RetroArch's `system` directory.

  + #### `state`

    **type:**
    <code>
      [resolvable file](/apis/resolvable-file)
    </code>

    **since:** `0.9.0`

    The initial state to be loaded after launching.

  + #### `sram`

    **type:**
    <code>
      [resolvable file](/apis/resolvable-file)
    </code>

    **since:** `0.12.0`

    The initial SRAM to be loaded after launching.

  + #### `shader`

    **type:** `string`

    **since:** `0.7.0`

    The name of a shader. By default, shader files will be loaded from [libretro/glsl-shaders](https://github.com/libretro/glsl-shaders) via jsDelivr using a loose matching logic.

    For example, if `shader` is `'crt/crt-easymode'`, these two files will be loaded from jsDelivr:

    + [crt/crt-easymode.glslp](https://github.com/libretro/glsl-shaders/blob/master/crt/crt-easymode.glslp)
    + [crt/shaders/crt-easymode.glsl](https://github.com/libretro/glsl-shaders/blob/master/crt/shaders/crt-easymode.glsl)

    If you want to load a shader that does not match this pattern, you might need to customize it by implementing the `resolveShader` function.

    This parameter is used for simple shaders only. For more complex cases, you might need to use the [`beforeLaunch`](#beforelaunch) parameter to write the shader files into the file system. Here is an example of how to load the crt-easymode shader by writing shader files:

    ```js
    await Nostalgist.launch({
      core: 'fceumm',
      rom: 'flappybird.nes',

      async beforeLaunch(nostalgist) {
        const FS = nostalgist.getEmscriptenFS()

        const glslp = await fetch('https://cdn.jsdelivr.net/gh/libretro/glsl-shaders/crt/crt-easymode.glslp')
        const glsl = await fetch('https://cdn.jsdelivr.net/gh/libretro/glsl-shaders/crt/shaders/crt-easymode.glsl')

        // Put all shader files into shaders/shaders_glsl directory
        FS.writeFile('/home/web_user/retroarch/bundle/shaders/shaders_glsl/crt-easymode.glslp', await glslp.text())
        FS.writeFile('/home/web_user/retroarch/bundle/shaders/shaders_glsl/shaders/crt-easymode.glsl', await glsl.text())

        // Enable the shader in the global shader config file config/global.glslp
        FS.writeFile(
          '/home/web_user/retroarch/userdata/config/global.glslp',
          '#reference /home/web_user/retroarch/bundle/shaders/shaders_glsl/crt-easymode.glslp',
        )
      },
    })
    ```

  + #### `style`

    **type:** `Object`

    The CSS style for the canvas element we are using for running the emulator.

    If the canvas element is created automatically, which means the `element` is not specified or is an empty string `''`, the style will be

    ```js
    {
      backgroundColor: 'black',
      height: '100%',
      left: '0',
      position: 'fixed',
      top: '0',
      width: '100%',
      zIndex: '1',
    }
    ```

    otherwise, it will be `undefined`.

    The CSS rule name should be "camelCase" instead of "kebab-case". For example, `{ backgroundColor: 'black' }` is valid, but `{ 'background-color': '' }` is not.

    The values of the CSS rules should be strings, not numbers. For example, `{ width: '800px' }` is valid, but `{ width: 800 }` is not.

  + #### `size`

    **type:** `'auto' | { width: number, height: number }` **default:** `'auto'`

    The size of the canvas element.
    If it's `'auto'`, the canvas element will keep its original size, or its width and height will be updated as specified.

    In most cases, it is recommended to specify the size of the element through CSS or the `style` parameter first.

  + #### `signal`

    **type:** `Object`

    **since:** `0.9.0`

    An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object used for cancelling a launch.

    Here is an example,
    ```js
    const abortController = new AbortController()

    // Cancel the launch after 500ms
    setTimeout(() => abortController.abort(), 500)

    const nostalgist = await Nostalgist.launch({
      core: 'fceumm',
      rom: 'flappybird.nes',
      signal: abortController.signal,
    })
    ```
  + #### `cache`

    **type:** `boolean` | `{ bios: boolean, core: boolean, rom: boolean, shader: boolean }` **default:** `false`

    **since:** `0.14.0`

    Whether to cache the loaded files for next time usage when using the same parameters. Set to `true` or `false` to enable or disable all caches, or set to an object to specify which part should be cached.

    Example:
    ```js
    // This may take some time as files are loaded through network...
    const nostalgist1 = await Nostalgist.launch({ cache: true, core: 'fceumm', rom: 'flappybird.nes' })

    nostalgist1.exit()

    // Will be launched instantly!
    const nostalgist2 = await Nostalgist.launch({ cache: true, core: 'fceumm', rom: 'flappybird' })
    ```

  + #### `retroarchConfig`
    **type:** `Object`

    The content you want to specify in `retroarch.cfg`, custom stuff like key mappings can be set using this option. Refer to [libretro/RetroArch/retroarch.cfg](https://github.com/libretro/RetroArch/blob/master/retroarch.cfg) for more information about how to config RetroArch.

    Keep in mind that not all options can take effect since we are launching RetroArch in a browser, not a native environment. And setting `stdin_cmd_enable` to `false` can cause Nostalgist.js saving or loading to break.

  + #### `retroarchCoreConfig`
    **type:** `Object`

    The content you want to specify in the core option file.

    For example,
    ```js
    const nostalgist = await Nostalgist.launch({
      core: 'fceumm',
      retroarchCoreConfig: {
        fceumm_turbo_enable: 'Both',
      },
      rom: 'flappybird.nes',
    })
    ```

  + #### `runEmulatorManually`
    **type:** `boolean` **default:** `false`

    If set to `true`, `Nostalgist.launch(options)` will still return an emulator instance, but will not start it automatically.

    The emulator will start only when `<instance>.launchEmulator` is called later.

    For example,
    ```js
    // will not launch the emulator
    const nostalgist = await Nostalgist.launch({
      core: 'fceumm',
      rom: 'flappybird.nes',
      runEmulatorManually: true,
    })

    // the emulator will be launched
    await nostalgist.launchEmulator()
    ```

  + #### `emscriptenModule`
    **type:** `Object` **default:** `{}`

    An option to override the `Module` object for Emscripten. See [Module object](https://emscripten.org/docs/api_reference/module.html).

    This is a low-level option and not well tested, so use it at your own risk.

    ```js
    const nostalgist = await Nostalgist.launch({
      core: 'fceumm',
      emscriptenModule: {
        printErr(str) {
          yourLogger.error(str)
        },
      },
      rom: 'flappybird.nes',
    })
    ```

  + #### `respondToGlobalEvents`
    **type:** `boolean` **default:** `true`

    Should user input events be bound to the global root element or the canvas element.

  + #### `resolveCoreJs`
    **type:** `Function`

    A custom function used for resolving a RetroArch core. The return value of this function should be a [resolvable file](/apis/resolvable-file).

    The function can also be asynchronous and return a `Promise` of a URL string.

    The original `core` options and the whole `options` will be passed to the function.

    Here is an example,
    ```js
    const nostalgist = await Nostalgist.launch({
      core: 'fceumm',
      rom: 'flappybird.nes',

      resolveCoreJs(core, options) {
        // will print 'fceumm'
        console.log(core)

        // will print the whole options object: { core: 'fceumm', rom: 'flappybird.nes', ... }
        console.log(options)

        return `https://example.com/${core}.js`
      },
    })
    ```

  + #### `resolveCoreWasm`
    **type:** `Function`

    A custom function used for resolving a RetroArch core. The return value of this function should be a [resolvable file](/apis/resolvable-file).

    Here is an example,
    ```js
    const nostalgist = await Nostalgist.launch({
      core: 'fceumm',
      rom: 'flappybird.nes',

      resolveCoreWasm(core, options) {
        // will print 'fceumm'
        console.log(core)

        // will print the whole options object: { core: 'fceumm', rom: 'flappybird.nes', ... }
        console.log(options)

        return `https://example.com/${core}.wasm`
      },
    })
    ```

  + #### `resolveRom`
    **type:** `Function`

    A custom function used for resolving a ROM. The return value of this function should be a [resolvable file](/apis/resolvable-file).

  + #### `resolveBios`
    **type:** `Function`

    A custom function used for resolving a BIOS. The return value of this function should be a [resolvable file](/apis/resolvable-file).

  + #### `resolveShader`
    **type:** `Function`

    **since:** `0.7.0`

    A custom function used for resolving shader files. The return value of this function should be a [resolvable file](/apis/resolvable-file) or an Array of [resolvable file](/apis/resolvable-file). The files should be some `glslp` and `glsl` files. At least one `glslp` file should be returned to make the shader apply.

  + #### `beforeLaunch`

    **type:** `Function`

    **since:** `0.9.0`

    A custom function before the emulator is launched. The Nostalgist instance will be passed as its first parameter. You can access the file system with `nostalgist.getEmscriptenFS` and then read or write its content inside this function. If this function returns a `Promise`, the emulator will be launched when that return value is resolved.

  + #### `onLaunch`

    **type:** `Function`

    **since:** `0.9.0`

    A custom function after the emulator is launched. The Nostalgist instance will be passed as its first parameter.

## Returns
A `Promise` of the instance of the emulator.