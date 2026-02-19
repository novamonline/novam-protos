.PHONY: generate lint format breaking

generate:
	./scripts/gen.sh

lint:
	buf lint

format:
	buf format -w

breaking:
	buf breaking --against 'https://github.com/novamonline/novam-protos.git#branch=main'
