import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import axios from 'axios';
import { CardSection, Input, Button } from './common';
import Data from './Data';

class EnterInput extends Component {
  state = { city: '', country: '', error: '', weatherData: [] };

  onButtonPress() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Minneapolis,us&APPID=3c197d6e7ceb6d991438eb6f07029e5c')
      .then(response => this.setState({ weatherData: response.data }));
      console.log(this.state.weatherData);
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <CardSection>
          <Input
          label="City"
          placeholder="City"
          value={this.state.city}
          onChangeText={city => this.setState({ city })}
          />
        </CardSection>

        <CardSection>
          <Input
          label="Country"
          placeholder="Country"
          value={this.state.country}
          onChangeText={country => this.setState({ country })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Get Weather
          </Button>
        </CardSection>
        <CardSection>
          <ScrollView>
            <Text>Test</Text>
          </ScrollView>
        </CardSection>
      </View>
    );
  }
}

export default EnterInput;
