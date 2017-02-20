# React / Redux / OnsenUI / Stub

Requirements
=
- nvm
- android sdk 
- xcode 
- java 1.8.x


Setup
=
- ```nvm use``` or ```nvm install```
- ```npm i```
- ```npm run prepare```

Web
=
- to try the application in your browser just type ```npm start``` and go to (http://0.0.0.0:9000/webpack-dev-server/). You need to disable CORS in order to receive data

Mobile
=
- To launch the app on android device/emulator ```npm run android```
- To launch the app on ios device/emulator ```npm run ios```
- Android build ```npm run build-android```
- Ios Build ```npm run build-ios```

Eslint
=

To use the lining pre-commit hook, just type

    cp scripts/pre-commit.sh .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit

Testing
=
- To launch tests ```npm test```
- To launch tests in watch mode ```npm test -- --watch```
