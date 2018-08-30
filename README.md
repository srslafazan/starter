# Starter

# Dependencies
- docker
- node
- yarn

The client, server, and database are run separately.


# Client (Web)
## Install
```bash
cd client && yarn
```
## Run (dev)
```bash
cd client && yarn dev
```
## Build (production)
```bash
cd client && yarn build
```
## Run (production)
```bash
cd client && yarn start
```

# Server (Gateway)
## Install
```bash
cd server && yarn
```
## Setup
- Runs postgres and sequelize migrations.
```bash
cd server && yarn setup
```
## Run (dev)
```bash
cd server && yarn dev
```
## Run (production)
```bash
cd server && yarn start
```

# Database
```bash
docker-compose up postgres
```

# License

Copyright (c) 2018 Shain Lafazan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
