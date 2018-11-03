# Starter

## Dependencies
- docker
- node + npm
- yarn

## Setup

```bash
cd webclient && yarn
cd gateway && yarn
```

## Start
> With docker
```bash
docker-compose up --build
```
> With separate local servers

- Database
```bash
docker-compose up postgres
```
- Webclient
```bash
cd webclient && yarn dev
```
- Gateway
```bash
cd gateway && yarn dev
```

## TODO

Queued
- Authentication constructors
- Unit Test Framework
- Functional (Automation) Test Framework
- Linting
- AWS Deployment interfaces
- Update Web3 constructors

Wishlist
- GCP Deployment interfaces
- Relay client constructors, implementation

## License

MIT
