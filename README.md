# Post and Follow

A twitter-like REST API using TDD.

Highlights:
1. Test-driven development
2. Caching implemented
3. Message Queue implemented using BullMQ

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
Copy .env.example file into a new .env file:
```
cp .env.example .env
```

Set env variables:

Know how to set up a separate App Password for Gmail here [https://support.google.com/mail/answer/185833?hl=en](https://support.google.com/mail/answer/185833?hl=en)
```
EMAIL=<youremail>@gmail.com
EMAIL_PASS=<gmail_app_password>
```

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

