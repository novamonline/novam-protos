.PHONY: generate lint format breaking

gen:
	./scripts/gen.sh

lint:
	buf lint

format:
	buf format -w

breaking:
	buf breaking --against 'https://github.com/novamonline/novam-protos.git#branch=main'

help: ## Show this help
	@grep -E '^[a-zA-Z0-9_.-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'
