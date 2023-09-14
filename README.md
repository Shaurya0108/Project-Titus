# Project Titus

## Introduction

What will this app do?

## Run

### Start Postgres in docker(or anywhere):

docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres


### Install Prisma package for Dev mode/CICD pipeline:

pnpm i -D prisma


### Install Prisma client:

pnpm i @prisma/client


### Create default Prisma folder:

npx prisma init


