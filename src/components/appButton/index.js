import React, { memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles';

const AppButton = props => {
  return (
      <TouchableOpacity style={[styles.button, props.style]} activeOpacity={0.7} onPress={props.onPress}>
        <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
      </TouchableOpacity>
  );
};

export default memo(AppButton);