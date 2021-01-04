#!/bin/bash

ENV=$1
RELEASE=$2

set -a
source .env.${ENV}
set +a

[[ $RELEASE = 'release' ]] && RUN_COMMAND="--variant=release" || RUN_COMMAND=""

ENVFILE=.env.${ENV} yarn android ${RUN_COMMAND}

if [ $? -eq 0 ]; then
  adb shell monkey -p ${APP_ID} -c android.intent.category.LAUNCHER 1
fi
