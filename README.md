# Starter

## Dependencies
- docker
- node + npm
- yarn

## Start
> - With docker
```bash
docker-compose up --build
```
> - With separate local servers
Database
```bash
docker-compose up postgres
```
- Client
```bash
cd client && yarn dev
```
- Server
```bash
cd server && yarn dev
```


## License

MIT
