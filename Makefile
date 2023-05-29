install: 
	npm ci
gendiff:
	node bin/gendiff.js
lint: # запускать npx eslint .
	npx eslint .
fix: # запускать исправление ошибок
	npx eslint --fix .
publish:

	npm publish --dry-run
coverage:
	npm test -- --coverage

