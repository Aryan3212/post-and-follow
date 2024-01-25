# Post and Follow

A twitter-like REST API using TDD.

## Prerequisites
- Node.js v20
  - Need version 20 to load env file natively.
- Docker

## Installation
```sh
git clone https://github.com/Aryan3212/mini-twitter.git
cd mini-twitter
npm install
```
## Usage

Spin up Redis Docker Container:
```
# Make sure Docker Daemon is running
# -d flag runs docker in detached mode(background)
# Docker compose will pick up `docker-compose.yml` file by default
docker compose up -d
```

To start the server:
```sh
npm start
```

To start the worker:
```sh
# This worker is responsible for completing queued jobs in Redis
npm run worker:dev
```
To run tests: 
```sh
npm run test
```

