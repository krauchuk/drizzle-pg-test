## Getting Started

### Setup

1. Run postgres docker container:
```sh
docker run --name docker-postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```
2. Manually create a new database `test-db`

3. Run generation SQL migration command:
```sh
npm run db:generate
```

4. Run database migration script:
```sh
npm run db:migrate
```
