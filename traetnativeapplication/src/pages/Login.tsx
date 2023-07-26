import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../components/Button.component';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={{alignItems: 'center'}}
        source={require('../images/logoMain.png')}
      />
      <View>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
          Sign in to continue
        </Text>
        <Button title="SIGN IN" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555FD9',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});