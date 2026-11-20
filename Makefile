.PHONY: install build lint format format-check typecheck test test-coverage

install:
	npm ci

build:
	npx tsc

lint:
	npm run lint

format:
	npm run format

format-check:
	npm run format:check

typecheck:
	npx tsc --noEmit

test:
	npm test

test-coverage:
	npm test -- --coverage