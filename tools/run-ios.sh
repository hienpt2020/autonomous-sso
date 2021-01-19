#!/bin/bash

ENV=$1
RELEASE=$2

set -a
source .env.${ENV}
set +a


echo "Copy google json to ios folder env/${ENV}/GoogleService-Info.plist"

cp -rf env/${ENV}/GoogleService-Info.plist ios/GoogleService-Info.plist

plutil -replace CFBundleDisplayName -string "${APP_NAME}" "ios/RNCodebase/Info.plist"
plutil -replace CFBundleShortVersionString -string "${APP_VERSION}" "ios/RNCodebase/Info.plist"
plutil -replace CFBundleVersion -string "${APP_BUILD_NUMBER}" "ios/RNCodebase/Info.plist"

plutil -replace CFBundleIdentifier -string "${APP_ID}" "ios/RNCodebase/Info.plist"
sed -E -i '' "s/(PRODUCT_BUNDLE_IDENTIFIER = \"(.*)\")/PRODUCT_BUNDLE_IDENTIFIER = \"${APP_ID}\"/g" "ios/RNCodebase.xcodeproj/project.pbxproj"

if [[ ${RELEASE} != "release" ]]; then
  ENVFILE=.env.${ENV} yarn ios
fi
