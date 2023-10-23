import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import MainNavigator from './MainNavigator';

export default function MainContainer() {
  return (
    <NavigationContainer>
      <MainNavigator></MainNavigator>
    </NavigationContainer>
  );
}
