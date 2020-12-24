# React Native StarWars Movies App

A mobile application built using React Native taking advantage of [SWAPI API](https://swapi.dev/)

## Features

- Using FlatList for better performance
- Search bar allowing to search based on title of the movie
- Caching results and Offline capability
- Redux, Redux Persist, Redux Saga, Reselect, Immer, Invariant
- React Native Vector Icons, React Native Elements

## Requirements

- NodeJS `brew install node`
- Watchman `brew install watchman`
- XCode
- Android Studio
- CocoaPods `sudo gem install cocoapods`
- React Native Debugger (dev only) `brew install --cask react-native-debugger`

## Setup instructions

### 1. Install dependencies

```
git clone https://github.com/atasmohammadi/StarWarsMovies
cd StarWarsMovies
yarn install
cd ios && pod install && cd ..
```

### 2. Run the app

iOS
```
npx react-native run-ios
```

Android
```
npx react-native run-android
```
