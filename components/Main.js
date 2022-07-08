/* eslint-disable prettier/prettier */
import React from 'react';
import {Layout, Button} from '@ui-kitten/components';
import {StyleSheet, Image} from 'react-native';

const Main = ({navigation}) => {
  return (
    <Layout style={styles.Layoutcontainer}>
      <Image source={require('../assets/CompanyLogo.png')} style={styles.img} />
      <Layout style={styles.btncontainer}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Welcome')}>
          {' '}
          Register{' '}
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('About You')}>
          {' '}
          Sign In{' '}
        </Button>
      </Layout>
    </Layout>
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
    backgroundColor: ' #f97316',
    position: 'absolute',
    bottom: 20,
    left: 9,
  },
  button: {
    margin: 5,
    width: '46%',
  },
});

export default Main;
