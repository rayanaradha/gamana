import React from 'react';

import {SafeAreaView, StyleSheet, Image, View} from 'react-native';
import {Button, NativeBaseProvider} from 'native-base';

const App = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.Layoutcontainer}>
         <Image source={require('./CompanyLogo.png')} style={styles.img} /> 
        <View style={styles.btncontainer}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('Welcome')}>
            SIGNUP
          </Button>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('About You')}>
            LOGIN
          </Button>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  Layoutcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f97316',
  },
  img: {
    width: 366,
    height: 306,
  },
  btncontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f97316',
    position: 'absolute',
    bottom: 20,
    left: 9,
  },
  button: {
    margin: 5,
    width: '46%',
  },
});
export default App;
