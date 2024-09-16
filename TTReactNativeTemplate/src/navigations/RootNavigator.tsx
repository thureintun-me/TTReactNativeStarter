import React from 'react';
import HomeStack from './stack/HomeStack.tsx';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigator = () => {

  return <NavigationContainer>
    <HomeStack />
  </NavigationContainer>;
}

export default RootNavigator;
