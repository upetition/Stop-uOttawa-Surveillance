.PHONY: help
help: ## Print this help message and exit
	@echo Usage:
	@echo "  make [target]"
	@echo
	@echo Targets:
	@awk -F ':|##' \
		'/^[^\t].+?:.*?##/ {\
			printf "  %-30s %s\n", $$1, $$NF \
		 }' $(MAKEFILE_LIST)

.PHONY: build
build: ## Build the docker containers
	docker-compose \
		-f docker/docker-compose.yml \
		build

.PHONY: run-detach
run-detach: ## Run the docker containers detached
	docker-compose \
		-f docker/docker-compose.yml \
		up -d

.PHONY: run-front
run-front: ## Run frontend and router docker containers detached from the terminal
	docker-compose \
		-f docker/docker-compose.yml \
		up -d router frontend

.PHONY: run-back
run-back:
	docker-compose \
		-f docker/docker-compose.yml \
		run backend

.PHONY: teardown
teardown: ## Shuts down the containers (if running) and removes their images
	docker-compose \
		-f docker/docker-compose.yml \
		down --rmi all

.PHONY: rebuild
rebuild: ## Shuts down containers, removes images, and builds new images
	make teardown && make build
