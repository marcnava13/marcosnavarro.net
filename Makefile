UID=$(shell id -u)
GID=$(shell id -g)
FILE_DOCKER_COMPOSE=docker/docker-compose.yml

.DEFAULT_GOAL:=help

##@ Helpers
.PHONY: help
help: ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

##@ Containers
.PHONY: up
up: ## Start all containers
	docker-compose -f ${FILE_DOCKER_COMPOSE} up -d

.PHONY: stop
stop: ## Stop all containers
	docker-compose -f ${FILE_DOCKER_COMPOSE} stop

.PHONY: down
down: ## Destroy all containers
	docker-compose -f ${FILE_DOCKER_COMPOSE} down

.PHONY: ps
ps: ## List of container statuses
	docker-compose -f ${FILE_DOCKER_COMPOSE} ps

##@ Building
.PHONY: init
init: erase build up ## Run all containers (restart)

.PHONY: build
build: ## Building project
	docker-compose -f ${FILE_DOCKER_COMPOSE} build --no-cache

##@ Cleanup
.PHONY: erase
erase: ## Erase all containers and volumes
	docker-compose -f ${FILE_DOCKER_COMPOSE} down -v

##@ Logs
.PHONY: logs
logs: ## View logs { s: [app|web] }
	docker-compose -f ${FILE_DOCKER_COMPOSE} logs -f ${s}

##@ Console
.PHONY: bash
bash: ## Run shell { s: [app|web] }
	docker-compose -f ${FILE_DOCKER_COMPOSE} exec -T ${s} sh