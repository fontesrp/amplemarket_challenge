#!/bin/bash

PROJECT_ROOT=`pwd`

buildClient() {
  local originalDir=`pwd`
  cd $PROJECT_ROOT/backend

  NODE_PATH=$PROJECT_ROOT/backend \
  node node_modules/.bin/react-scripts build

  cd $originalDir
}

clean() {
  rm -rf \
    $PROJECT_ROOT/node_modules \
    $PROJECT_ROOT/package-lock.json \
    $PROJECT_ROOT/yarn.lock
}

initBackend() {
  local backendPath=$PROJECT_ROOT/backend

  rm -rf \
    $backendPath/node_modules \
    $backendPath/package.json

  ln -s $PROJECT_ROOT/node_modules $backendPath/node_modules
  ln -s $PROJECT_ROOT/package.json $backendPath/package.json
}

startClientDev() {
  local originalDir=`pwd`
  cd $PROJECT_ROOT/backend

  DISABLE_ESLINT_PLUGIN=true \
  NODE_PATH=$PROJECT_ROOT/backend \
  NODE_ENV=development \
  PORT=3001 \
  node node_modules/.bin/react-scripts start

  cd $originalDir
}

startServer() {
  DEBUG=amplemarket_challenge:* \
  LOGGER_LEVEL=error \
  NODE_ENV=production \
  NODE_PATH=$PROJECT_ROOT/backend/server/ \
  node $PROJECT_ROOT/backend/server/bin/www
}

startServerDev() {
  DEBUG=amplemarket_challenge:* \
  LOGGER_LEVEL=debug \
  NODE_ENV=development \
  NODE_PATH=$PROJECT_ROOT/backend/server/ \
  nodemon $PROJECT_ROOT/backend/server/bin/www
}

case "$1" in
  clean)
    clean
    ;;
  start)
    initBackend
    buildClient
    startServer
    ;;
  start-dev)
    initBackend
    startServerDev & startClientDev
    ;;
esac
