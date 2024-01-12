# Upscale.meida Plugin

This plugin is dedicated to background removal process.
Once open/hover the plugin you will see three options "Run","Set/Reset Token" and "How it works" those are mention in `manifest.json` as menu items.

## Project Structure

Two important folders are `plugin` and `ui`
where in plugin `index.ts` is entry to the plugin and ui is append through showUI which is written inside `ui` folder thorugh `index.html` and it mainly contains `App.tsx`

## List of Scripts

There are two sets of commands in `package.json`: one covers the plugin logic and the other is for the UI development. Run `plugin:dev` and `ui:dev` in parallel to track changes from both sides. To build the production code, execute `plugin:build` followed by `ui:build`.

```json
"scripts": {
    "plugin:tsc":     "tsc -p plugin/tsconfig.json",
    "plugin:esbuild": "node plugin/esbuild.mjs",
    "plugin:dev":     "npm run plugin:esbuild -- watch",
    "plugin:build":   "npm run plugin:tsc && npm run plugin:esbuild -- build",

    "ui:tsc":         "tsc -p ui/tsconfig.json",
    "ui:vite":        "vite --config ui/vite.config.ts",
    "ui:dev":         "npm run ui:vite -- build --watch",
    "ui:build":       "npm run ui:vite && npm run ui:tsc",
    "create:build": "npm run plugin:build && npm run ui:build"

}
```

## Development Process

1. Clone this repository and install developer dependencies using `npm install -D` command.
2. create a build for plugin and ui using `npm run create:build`
3. And Plugin is ready to run

## References

1. [Figma's introduction to plugin development](https://www.figma.com/plugin-docs/intro/)
2. [UI] https://github.com/thomas-lowry/figma-plugin-ds?tab=readme-ov-file#checkbox
