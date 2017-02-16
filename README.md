# React / Redux / OnsenUI / Stub

Requisiti
=
- nvm
- android sdk 
- xcode 
- java 1.8.x


Step comuni per Build
=
- ```nvm use``` 
- controllare se la versione di node 6.9.4 è installata
- se non è installa ```nvm install 6.9.4```
- ```npm i```
- ```npm run prepare```

Build Web
=
- Per far girare l'app sul browser (http://0.0.0.0:9000/webpack-dev-server/) ```npm start```

Build mobile
=
- Per lanciare l'app su dispositivo/emulatore android ```npm run android```
- Per lanciare l'app su dispositivo/simulatore ios ```npm run ios```
- Build android ```npm run build-android```
- Build ios ```npm run build-ios```

Eslint
=

Per installare l'hook di pre-commit per eslint digitare nella root del progetto. Se si utilizza questo hook i commit vanno *sempre* fatti dalla root del progetto

    cp scripts/pre-commit.sh .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit

Testing
=
- Per lanciare i test ```npm test```
- Per lanciare i test con il watch ```npm test -- --watch```
