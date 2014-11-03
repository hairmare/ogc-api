# Online GLSA Checker API

[restify](https://www.npmjs.org/package/restify) based api server.

## Install

```
npm install
```

## Usage

```
cp config.json-dist config.json
node index.js
```

## Run on Docker

```
docker run --link mongodb:mongodb -d -P hairmare/ogc-api
```
