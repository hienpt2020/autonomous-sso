#!/bin/bash

ENV=$1
RELEASE=$2

set -a
source .env.${ENV}
set +a


cp -rf env/${ENV}/GoogleService-Info.plist ios/GoogleService-Info.plist
echo "Overided GoogleService-Info to ios folder env/${ENV}/GoogleService-Info.plist"
cp -rf .env.${ENV} .env
echo "Overided .env.${ENV} folder"


plutil -replace CFBundleDisplayName -string "${APP_NAME}" "ios/RNCodebase/Info.plist"
plutil -replace CFBundleShortVersionString -string "${APP_VERSION}" "ios/RNCodebase/Info.plist"
plutil -replace CFBundleVersion -string "${APP_BUILD_NUMBER}" "ios/RNCodebase/Info.plist"
plutil -replace CFBundleIdentifier -string "${APP_ID}" "ios/RNCodebase/Info.plist"

echo "Extract Reverse Client ID and add to Schema for sign in google"
REVERSED_CLIENT_ID=$(/usr/libexec/PlistBuddy -c "Print:REVERSED_CLIENT_ID" "ios/GoogleService-Info.plist")
plutil -remove CFBundleURLTypes.1.CFBundleURLSchemes.0 "ios/RNCodebase/Info.plist"
plutil -replace CFBundleURLTypes.1.CFBundleURLSchemes.0 -string "${REVERSED_CLIENT_ID}" "ios/RNCodebase/Info.plist"
echo "Add schema for sign in google done"

sed -i "" "s/\(PRODUCT_BUNDLE_IDENTIFIER = \).*\(;\)/\1${APP_ID}\2/" "ios/RNCodebase.xcodeproj/project.pbxproj"

if [[ ${RELEASE} != "release" ]]; then
  ENVFILE=.env.${ENV} yarn ios
fi
