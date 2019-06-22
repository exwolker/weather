import React from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

const Data = (wData) => {
  const { name } = wData;

  return (
    <CardSection>
      {name}
    </CardSection>
  );
};

export default Data;
