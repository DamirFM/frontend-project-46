install: 
	npm ci
publish:
	npm publish --dry-run
gendiff:
	node bin/gendiff.js
lint: # запускать npx eslint .
	npx eslint .
fix: # запускать исправление ошибок
	npx eslint --fix .
publish:
	npm publish --dry-run

