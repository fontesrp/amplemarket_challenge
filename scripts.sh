#!/bin/bash

PROJECT_ROOT=`pwd`

buildClient() {
  local originalDir=`pwd`
  cd $PROJECT_ROOT/backend

  NODE_PATH=$PROJECT_ROOT/backend \
  yarn react-scripts build

  cd $originalDir
}

clean() {
  rm -rf \
    $PROJECT_ROOT/node_modules \
    $PROJECT_ROOT/package-lock.json \
    $PROJECT_ROOT/yarn.lock \
    $PROJECT_ROOT/backend/node_modules \
    $PROJECT_ROOT/backend/package-lock.json \
    $PROJECT_ROOT/backend/yarn.lock
}

startClientDev() {
  local originalDir=`pwd`
  cd $PROJECT_ROOT/backend

  DISABLE_ESLINT_PLUGIN=true \
  NODE_PATH=$PROJECT_ROOT/backend \
  NODE_ENV=development \
  PORT=3001 \
  yarn react-scripts start

  cd $originalDir
}

startServer() {
  DEBUG=backend:* \
  LOGGER_LEVEL=error \
  NODE_ENV=production \
  NODE_PATH=$PROJECT_ROOT/backend/server/ \
  node $PROJECT_ROOT/backend/server/bin/www
}

startServerDev() {
  DEBUG=backend:* \
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
    buildClient
    startServer
    ;;
  start-dev)
    startServerDev & startClientDev
    ;;
esac
