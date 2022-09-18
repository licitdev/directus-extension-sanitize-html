# Directus Extension - Sanitize HTML

Sanitize HTML inputs with the [sanitize-html](https://www.npmjs.com/package/sanitize-html) package.

[![NPM version][npm-version-image]][npm-url] [![License][license-image]][license-url]
[![NPM downloads][npm-downloads-image]][npm-url]

## Installation

```
npm install directus-extension-sanitize-html
```

## Options

### Customize which event scopes to sanitize

Add the `EXT_SANITIZE_HTML_EVENT_SCOPES` environment variable with the event scopes separated by commas.

Defaults to running `items.create,items.update`.

Example: `articles.items.create,articles.items.update`

### Customize which paths to omit for sanitization

Add the `EXT_SANITIZE_HTML_OMIT_PATHS` environment variable with the `<collection>.path` separated by commas.

Defaults to no path to omit.

Example: `articles.content,website.rawHtml`

## License

GPLv3 License. See the [LICENSE](LICENSE) file.

[npm-downloads-image]: https://img.shields.io/npm/dm/directus-extension-sanitize-html.svg?style=flat-square
[npm-version-image]: https://img.shields.io/npm/v/directus-extension-sanitize-html.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/directus-extension-sanitize-html
[license-url]: https://github.com/licitdev/directus-extension-sanitize-html/blob/main/LICENSE
[license-image]: https://img.shields.io/npm/l/directus-extension-sanitize-html.svg?style=flat-square
