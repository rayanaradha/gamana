/* eslint-disable prettier/prettier */
import React from 'react';
import {Layout, Button} from '@ui-kitten/components';
import {Input} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const Auth = navigation => {
  return (
    <Layout style={styles.Layoutcontainer}>
      <Button style={styles.button}  status="primary">
        {' '}
        CONTINUE{' '}
      </Button>
      <Layout style={styles.Layoutcontainer2} level='1' >
        <Input placeholder="Namessssssssssssss" style={styles.Layoutcontainer1}/>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  Layoutcontainer2: {
    flexDirection: 'row',
  },
  Layoutcontainer1: {
    margin: 15,
    flex: 1,
    margin: 2,
  },
  button: {
    margin: 5,
    width: '95%',
    position: 'absolute',
    bottom: 20,
  },
});

export default Auth;