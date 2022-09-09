import { defineHook } from '@directus/extensions-sdk';
import sanitizeHtml from 'sanitize-html';
import { get, set, omit } from 'lodash';

export default defineHook(({ filter }) => {
	const eventScopes = process.env.EXT_SANITIZE_HTML_EVENT_SCOPES
		? process.env.EXT_SANITIZE_HTML_EVENT_SCOPES.split(',')
		: ['items.create', 'items.update'];

	const omitPaths = (
		process.env.EXT_SANITIZE_HTML_OMIT_PATHS ? process.env.EXT_SANITIZE_HTML_OMIT_PATHS.split(',') : []
	).reduce((acc: Record<string, string[]>, path: string) => {
		const pathSplits = path.split('.');
		const collection = pathSplits[0];

		if (!collection || pathSplits.length < 2) return acc;

		return { ...acc, [collection]: [...(acc[collection] ?? []), pathSplits.slice(1).join('.')] };
	}, {});

	for (const eventScope of eventScopes) {
		filter(eventScope, runSanitize);
	}

	function runSanitize(input: any, { collection }: any) {
		const cache: Record<string, any> = {};

		for (const path of omitPaths[collection] ?? []) {
			cache[path] = get(input, path);
		}

		input = sanitize(omit(input, omitPaths[collection] ?? []));

		for (const path of omitPaths[collection] ?? []) {
			if (cache[path] !== undefined) {
				set(input, path, cache[path]);
			}
		}

		return input;
	}
});

function sanitize(val: any) {
	switch (typeof val) {
		case 'string':
			return sanitizeHtml(val);
		case 'object':
			if (Array.isArray(val)) {
				for (let i = 0; i < val.length; i++) {
					val[i] = sanitize(val[i]);
				}
			} else {
				for (const key of Object.keys(val)) {
					val[key] = sanitize(val[key]);
				}
			}
			return val;
		default:
			return val;
	}
}
