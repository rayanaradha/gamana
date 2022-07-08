/* eslint-disable prettier/prettier */
import React from 'react';
import {Layout, Button} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const SignUp = navigation => {
  return (
    <Layout style={styles.Layoutcontainer}>
      <Button style={styles.button} status="primary">
        {' '}
        CONTINUE{' '}
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  Layoutcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 5,
    width: '95%',
    position: 'absolute',
    bottom: 20,
  },
});

export default SignUp;
