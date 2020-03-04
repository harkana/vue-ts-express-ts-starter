#! /bin/bash

cd ./front
npm i
npm link typescript
npm link webpack
webpack --config webpack-client.config.js
webpack --config webpack-server.config.js
export VIEW=`pwd`
cd ../back
npm i
npm link typescript
npm start
