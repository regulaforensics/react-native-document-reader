# How to build demo application

1. Get the trial license at [client.regulaforensics.com](https://client.regulaforensics.com/) (`regula.license` file). The license creation wizard will guide you through the necessary steps.
2. Get the trial database at [client.regulaforensics.com/customer/databases](https://client.regulaforensics.com/customer/databases) (`db.dat`)
2. Download or clone this repository using the command `git clone https://github.com/regulaforensics/react-native-document-reader.git`.
4. Copy the `regula.license` file to the `example/android/app/src/main/assets/` folder.
4. Copy the `regula.license` file to the `example/ios/` folder.
5. Copy the `db.dat` file to the `example/android/app/src/main/assets/Regula/` folder.
6. Copy the `db.dat` file to the `example/ios/` folder.
3. Run the following commands in Terminal:
```bash
$ cd example
$ npm install
$ cd ios
$ pod install
```

4. Android:
  * Copy the `regula.license` file to the `example/android/app/src/main/assets` folder.
  * Run `npm run android` (or `npx react-native run-android --no-packager`) inside `example` folder - this is just one way to run the app. You can also run it directly from within Android Studio.
  * If gradle sync fails, select JDK-17 in Android Studio

**Note**: if the running failed with the following error `Error: spawn ./gradlew EACCES`, try to run the following command `chmod +x gradlew` within the `example/android` directory.

5. iOS:
  * Copy the `regula.license` file to the `example/ios` folder.
  * Run `npm run ios` (or `npx react-native run-ios --no-packager`) inside `example` folder - this is just one way to run the app. You can also run it directly from within Xcode.

# Troubleshooting license issues

If you have issues with license verification when running the application, please verify that next is true:
1. The OS, which you use, is specified in the license (e.g., Android and/or iOS).
3. The license is valid (not expired).
4. The date and time on the device, where you run the application, are valid.
5. You use the latest release version of the Document Reader SDK.
6. You placed the  `license` into the correct folder as described [here](#how-to-build-demo-application).
