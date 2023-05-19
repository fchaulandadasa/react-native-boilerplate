# Adasa Mobile Boilerplate (React Native)

This boiler plate has been created using [The Code machine boilerplate](https://thecodingmachine.github.io/react-native-boilerplate/docs/Introduction/) as starting point.

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kick-start a mobile application.

The boilerplate provides **an architecture optimized for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic.
We made this full documentation so that each piece of code that lands in your application can be understood and used.


:::tip Don't forget !!
If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives 🌈 ☀️
:::

## Architecture 🧱

The driving goal of the architecture of the boilerplate is separation of concerns and using React Native at its best.

- **Using modern Javascript**
    So many javascript features are indispensable now like hooks, functional component and really cool dependencies.

- **Presentational components are separated from containers**.

    Presentational components are small components that are concerned with *how things look*.
    Containers usually define whole application screens and are concerned with *how things work*: they include presentational components and wire everything together.

    If you are interested you can [read more about it here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

- **State is managed using global [Redux](https://redux.js.org/) stores**.

    When applications grow, sharing state and its changes can become very hard. Questions like "How can I access this data?" or "When did this change?" are common, just like passing data around components just to be able to use it in nested components.

    With Redux, state is shared using global *stores*, and changes are predictable: *actions* are applied by *reducers* to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications.

    If you are interested you can [read more about it here](https://redux.js.org/introduction/motivation).

## Content 🧳

The boilerplate contains a [clear directory layout](#directory-layout) to provide a base architecture for your application with some essential dependencies:
- [React Native](https://facebook.github.io/react-native/) (v**<VersionReader name="react-native"/>**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- [Redux](https://redux.js.org/) (v**<VersionReader name="react-redux"/>**) to help manage state
- [Redux Toolkit (Query)](https://redux-toolkit.js.org/) (v**<VersionReader name="@reduxjs/toolkit"/>**) to improve redux api calls
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v**<VersionReader name="redux-persist"/>**) to persist the Redux state
- [React Native mmkv](https://github.com/mrousavy/react-native-mmkv) (v**<VersionReader name="react-native-mmkv"/>**) which is an efficient, small mobile key-value storage
- [React Navigation](https://reactnavigation.org/) (v**<VersionReader name="@react-navigation/native"/>**) to handle routing and navigation in the app, with a splash screen setup by default
- [React I18Next](https://github.com/i18next/react-i18next) (v**<VersionReader name="react-i18next"/>**) to handle internationalization in your app
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native
- [react-native-flipper](https://fbflipper.com/) (v**<VersionReader name="react-native-flipper" dev/>**) to debug react-native,
 [redux-flipper](https://github.com/jk-gan/redux-flipper) (v**<VersionReader name="redux-flipper" dev/>**) to debug redux,
 [navigation devtool](https://www.npmjs.com/package/@react-navigation/devtools) (v**<VersionReader name="@react-navigation/devtools" dev/>**) to debug navigation,


The boilerplate includes an example (displaying fake user data) from UI components to the business logic. The example is easy to remove so that it doesn't get in the way.

## Directory layout 🗂️

- `src/components`: presentational components
- `src/hooks`: hooks of the app, you will have the `useTheme` hook to access the theme
- `src/navigators`: react navigation navigators
- `src/screens`: container components, i.e. the application's screens
- `src/services`: application services, e.g. API clients
- `src/stores`: redux [actions, reducers and stores](https://redux.js.org/basics)
- `src/theme`: base styles for the application
- `src/translations`: application strings, you can add languages files and be able to translate your app strings

# Installation

## Requirements 🎒

Node 12 or greater is required. Development for iOS requires a Mac and Xcode 10 or up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)


## Running with typescript 💙

During the installation the cli will ask you if you want to use typescript, tap on the `y` key and all the requirement will be set.
to type check your project just run `yarn tsc`.

## Running the project 📲

Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn <platform>` to run the *platform* application (remember to start a simulator or connect a device)

# Configuration

## Change the appicon
To help generate appicons, you can use an online tool like [appicon](https://appicon.co/) or [easyappicon](https://easyappicon.com/) to generate for both iOS and Android all icons and image sets.

### iOS 🍎
To change the appicon of the iOS application, you need to replace all the content of 
```
src > ios > *name_of_your_app* > Images.xcassets > AppIcon.appiconset
```
with your appicons generated with [appicon](https://appicon.co/) for example.

### Android 🤖
To change the appicon of the Android application, you need to replace all the content of 
```
src > android > app > src > res
```
with your appicons generated with [appicon](https://appicon.co/) for example.

--- 

## Change the splash screen icon

### iOS 🍎
You can use the same tool ([appicon](https://appicon.co/)) to generate image sets (@1x, @2x, @3x). 
Then you just have to replace : `Splash_icon@1x.png`, `Splash_icon@2x.png`, `Splash_icon@3x.png` with yours in :
```
src > ios > *name_of_your_app* > Images.xcassets > SplashIcon.imageset
```

### Android 🤖
You just have to replace the splash_icon.png located at : 
```
src > android > app > src > res > drawable
```