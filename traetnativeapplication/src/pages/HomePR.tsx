import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import MyTabs from '../navigation/TabNavigator';


const HomePR = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 35,
        }}>
        <Image style={{width:150, height:30}} source={require('../images/sidelogo.png')} />
        <Image  source={require('../images/bell.png')} />
      </View>
    </View>
  );
}
export default HomePR;

const styles = StyleSheet.create({});