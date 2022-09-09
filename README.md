# Directus Extension - Sanitize HTML

Sanitize HTML inputs with the [sanitize-html](https://www.npmjs.com/package/sanitize-html) package.

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
