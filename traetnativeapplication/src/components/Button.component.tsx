import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


const Button = ({
  title,
  color = '#2F3148',
}: {
  title: string;
  color?: string;
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{color: color, fontSize: 18, fontWeight: '800'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8E756',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 60,
    justifyContent: 'center',
    marginTop: 15,
    borderCurve: 'circular',
    borderRadius: 21.5,
  },
});
export default Button;