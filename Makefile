# Run Android DEBUG
run-android-dev:
	./tools/run.sh android development

run-android-staging:
	./tools/run.sh android staging

run-android-production:
	./tools/run.sh android production

# Run IOS DEBUG
run-ios-dev:
	./tools/run.sh ios development

run-ios-staging:
	./tools/run.sh ios staging

run-ios-production:
	./tools/run.sh ios production

# BUILD Android RELEASE
build-android-dev:
	./tools/run.sh android development release

build-android-staging:
	./tools/run.sh android staging release

build-android-production:
	./tools/run.sh android production release

# Run IOS RELEASE
build-ios-dev:
	./tools/run.sh ios development release

build-ios-staging:
	./tools/run.sh ios staging release

build-ios-production:
	./tools/run.sh ios production release