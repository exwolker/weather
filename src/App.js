import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import EnterInput from './components/EnterInput';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Get Weather App" />
        <EnterInput />
      </View>
    );
  }
}

export default App;
