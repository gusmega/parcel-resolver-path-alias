# parcel-resolver-path-alias

A parcel resolver plugin to shorten import path and to enable absolute path import.

## Installation

With `npm`:

```
$ npm install --save-dev parcel-resolver-path-alias
```

With `yarn`:

```
$ yarn add --dev parcel-resolver-path-alias
```

## Usage

Add the following lines to your `.parcelrc` file in your project:

```json
{
  "extends": "@parcel/config-default",
  "resolvers": ["parcel-resolver-path-alias", "..."]
}
```

Note that the `"..."` is required, so parcel will still use the rest of its default resolver. Without that, your project likely will not build.

## Example

After updating your parcel config, assuming you have a project layout like this:

```
my-awesome-project
├── package.json
├── yarn.lock
└── src
    ├── components
    |   ├── button.js
    |   └── input.js
    └── index.js
```

You can now do this -

```js
import Button from 'components/button';
```

...from anywhere in your project and trust that it will resolve correctly.

Note: supported file extensions: `js`, `jsx`, `ts` and `tsx`
