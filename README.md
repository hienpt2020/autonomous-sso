## AUTONOMOUS APP
* **Supported iOS versions:** 10+
* **Supported Android versions:** 9.0+

## Prerequisites

| name | version |
|---|---|
| typescript | ^3.8.3
| reactnative | 0.62.2
| react-navigation/bottom-tabs | ^5.11.2
| react-navigation/material-top-tabs | ^5.3.11
| react-navigation/native | ^5.1.7
| react-navigation/stack | ^5.2.14

## Download
<a href="https://play.google.com/store/apps/details?id=12213sla">
  <img alt="Download on Google Play" src="https://play.google.com/intl/en_us/badges/images/badge_new.png" height=43>
</a>
<a href="https://apps.apple.com/us/app/">
  <img alt="Download on App Store" src="https://user-images.githubusercontent.com/7317008/43209852-4ca39622-904b-11e8-8ce1-cdc3aee76ae9.png" height=43>
</a>

## [Debug] How to run on 3 environments
Run this on your terminal for one of environments:
``` bash
#develop
make run-android-dev
make run-ios-dev
#staging
make run-android-staging
make run-ios-staging
#production
make run-android-production
make run-ios-production
```

## [Release] How to run on 3 environments
* **IOS**: 


* **Android**: Run this on your terminal
```
ENVFILE=.env.develop ./gradlew assembleRelease  -PstoreFile=<file.keystore> -Ppassword=<Password> -PkeyAlias=<Key Alias>
```

For more details, please follow this [LINK](https://www.notion.so/Release-Information-8d5ec3d833b2494e917cce8ca61bd4b1) to make a release for android or IOS

## How To Run CI-CD
## Jest
We use Jest for our unit tests
To check for test issues on your code, run this on your terminal:
```

```

## E2E tests
We use [XXX-XXX]() framework to end-to-end test our app and ensure everything is working properly.

[Follow this documentation to learn how to run it.]()

## Coding Convention
We use [ESLINT]() And [PRETTIERRC]()

In addition, please follow this [LINK](https://www.notion.so/React-native-df91f8c20913481a9ee298fdbbe541c1) for more detailed information

## Pull a request
As soon as your changes are ready, you can open a Pull Request.

The title of your PR should be descriptive, including either [FEATURE], [IMPROVEMENT] or [FIX] at the beginning, e.g. [FIX] App crashing on startup.
