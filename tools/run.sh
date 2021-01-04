#!/bin/bash

if [ "$1" == "--help" ] || [ -z "${1}" ] || [ $( echo "${1}" | egrep -c "^(android|ios)$" ) -eq 0 ] ; then
  echo "Usage: ./run.sh [Platform] [Environment]"
  echo $'\t- Platform:'
  echo $'\t\t- android'
  echo $'\t\t- ios'
  echo $'\t- Environment:'
  echo $'\t\t- development'
  echo $'\t\t- staging'
  echo $'\t\t- production'
  echo $'\t\t- demo'
  exit 0
fi

if [ -z "${2}" ] || [ $( echo "${2}" | egrep -c "^(development|staging|production|demo)$" ) -eq 0 ] ; then
  echo "Usage: ./run.sh [Platform] [Environment]"
  echo $'\t- Platform:'
  echo $'\t\t- android'
  echo $'\t\t- ios'
  echo $'\t- Environment:'
  echo $'\t\t- development'
  echo $'\t\t- staging'
  echo $'\t\t- production'
  echo $'\t\t- demo'
  exit 0
fi

PLATFORM=$1
ENV=$2

# Update new APP_BUILD_NUMBER value
export $(xargs < .env.${ENV})

NEW_VALUE=`cat .env.${ENV} | sed "s/APP_BUILD_NUMBER=${APP_BUILD_NUMBER}/APP_BUILD_NUMBER=$((${APP_BUILD_NUMBER}+1))/g"`
echo "${NEW_VALUE}" > .env.${ENV}

if [[ ${PLATFORM} = "android" ]]; then
  ./tools/run-android.sh $ENV $3
else
  ./tools/run-ios.sh $ENV $3
fi
