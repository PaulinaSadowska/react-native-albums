import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
//executed intantly after render
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => console.log(responseData));
  }
    render() {
      return (
        <View>
          <Text> Album List component</Text>
        </View>
      );
  }
}

export default AlbumList;
