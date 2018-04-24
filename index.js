import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a component
const App = () => (
    //JSX! it's JS syntactic sugar, mask over normal function calls
  <Text>Some text!</Text>
);

//rendering
AppRegistry.registerComponent('albums', () => App);
