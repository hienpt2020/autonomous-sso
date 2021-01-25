#!/bin/bash

ENV=$1
RELEASE=$2
STOREFILE=$keyStore
STOREALIAS=$keyAlias
STOREPASSWORD=$password

set -a
source .env.${ENV}
set +a
echo ENV: $ENV RELEASE: $RELEASE STOREFILE: $STOREFILE STOREALIAS: $STOREALIAS STOREPASSWORD: $STOREPASSWORD

cp -rf env/${ENV}/google-services.json android/app/google-services.json
echo "Overided google json to android folder env/${ENV}/google-services.json"
cp -rf .env.${ENV} .env
echo "Overided .env.${ENV} folder"

cd android
if [[ $RELEASE = 'release' ]]; then
  if [ -z "$STOREFILE" ] || [ -z "$STOREFILE" ] || [ -z "$STOREFILE" ]; then
    echo "Error build release without keystore"
    exit 1
  fi
  echo "Begin build release $STOREFILE"
  ENVFILE=.env.${ENV} ./gradlew assembleRelease -PstoreFile="${STOREFILE}" -Ppassword="${STOREPASSWORD}" -PkeyAlias="${STOREALIAS}"
else
  echo "Begin run debug"
  ENVFILE=.env.${ENV} ./gradlew installDebug -PstoreFile='autonomous-mobile.keystore' -Ppassword='autonomousdev2020' -PkeyAlias='Autonomous Mobile'
fi

if [ $? -eq 0 ]; then
  adb shell monkey -p ${APP_ID} -c android.intent.category.LAUNCHER 1
fi
cd ../
