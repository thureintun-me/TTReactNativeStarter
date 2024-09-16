import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppDrawer from './drawer/AppDrawer.tsx';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default RootNavigator;
