import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './components/Main';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import Login from './components/Login';
import SignUp from './components/SignUP';
import Auth from './components/Auth';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="NIMI"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Welcome" component={Login} />
          <Stack.Screen name="About You" component={SignUp} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
