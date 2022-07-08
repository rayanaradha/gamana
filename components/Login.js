/* eslint-disable prettier/prettier */
import React from 'react';
import {Layout, Button} from '@ui-kitten/components';
import {Input} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const Login = ({navigation})=> {
  return (
    <Layout style={styles.Layoutcontainer}>
      <Button style={styles.button} status="primary" onPress={() => navigation.navigate('Auth')}>
        {' '}
        CONTINUE{' '}
      </Button>
      <Layout style={styles.Layoutcontainer1}>
        <Input placeholder="Name" style={styles.Layoutcontainer1}/>
        <Input placeholder="Phone Number" style={styles.Layoutcontainer1} />
        <Input placeholder="NIC Number " style={styles.Layoutcontainer1}/>
        <Input placeholder="District"  style={styles.Layoutcontainer1}/>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  Layoutcontainer: {
    flex: 1,
  },
  Layoutcontainer1: {
    width: '90%',
    margin: 15,
  },
  button: {
    margin: 5,
    width: '95%',
    position: 'absolute',
    bottom: 20,
  },
});

export default Login;
