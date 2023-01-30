import React from 'react';
import {TextInput} from 'react-native';

const TextInputComponent = props => {
  return (
    <TextInput
      value={props.value}
      underlineColorAndroid="transparent"
      placeholder={props.placeholder}
      placeholderTextColor="#007FFF"
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      returnKeyType={props.returnKeyType}
      numberOfLines={props.numberOfLines}
      multiline={props.multiline}
      onSubmitEditing={props.onSubmitEditing}
      // style={props.style}
      blurOnSubmit={false}
      style={styles.textInput}
    /> 
  );
};
const styles = StyleSheet.create({
  textInput: {
    textAlignVertical: 'top',
    padding: 10,
  },
});
export default TextInputComponent;
