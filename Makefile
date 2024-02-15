develop:
	npx webpack serve

install:
	npm ci

build:
	NODE_ENV=production npx webpack

start:
	npx webpack serve

test:
	npm test

lint:
	npx eslint .

.PHONY: test