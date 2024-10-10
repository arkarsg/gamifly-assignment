.PHONY: db
db:
	@docker run --name gamifly-pg -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres:17-alpine