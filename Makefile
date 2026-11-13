.PHONY: test test-unit test-integration test-e2e test-all gen lint format breaking check-gen release help

gen: ## Regenerate gen/go and gen/ts from proto/
	./scripts/gen.sh

lint: ## buf lint
	buf lint

format: ## buf format -w
	buf format -w

breaking: ## Fail on breaking changes against main
	buf breaking --against 'https://github.com/novamonline/novam-protos.git#branch=main'

check-gen: gen ## Fail when the committed gen/ is behind proto/
	git diff --exit-code -- gen
	@test -z "$$(git status --porcelain -- gen)" || (git status --porcelain -- gen; exit 1)

release: ## Tag a release: make release VERSION=0.2.0 (tags v0.2.0 and gen/go/v0.2.0; does not push)
	./scripts/release.sh $(VERSION)

# No test suites here: the protos are checked by buf lint and by the committed gen/ matching proto/.
test: lint check-gen ## buf lint, then check-gen

test-unit test-integration test-e2e: ## None: the protos have no test suites (make test lints and checks gen/)
	@echo "novam-protos has no $@ tests: make test runs buf lint and check-gen"

test-all: test ## Same as test

help: ## Show this help
	@grep -E '^[a-zA-Z0-9_.-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'
