import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

var Main = require('./App/Components/Main');

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
})

class githubNotetaker extends React.Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          title: 'Github Note Taker',
          component: Main
        }} />

    );
  }
};

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
