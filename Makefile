NODE_MODULES_BIN=node_modules/.bin

start:
	$(NODE_MODULES_BIN)/jspm install && \
	$(NODE_MODULES_BIN)/broccoli serve

test:
	$(NODE_MODULES_BIN)/tsc

dist:
	rimraf dist; \
	$(NODE_MODULES_BIN)/broccoli build dist

.PHONY: start test dist
