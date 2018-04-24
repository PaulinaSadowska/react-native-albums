import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
    //JSX! it's JS syntactic sugar, mask over normal function calls
  <Header />
);

AppRegistry.registerComponent('albums', () => App);
