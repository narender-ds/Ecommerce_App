// Screen to register the user

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';
import ButtonComponent from '../Components/ButtonComponent';
import TextInputComponent from '../Components/TextInputComponent';

var db = openDatabase({name: 'Ecommerce.db'});

const RegisterUser = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');

  const Register = () => {
    console.log(name, email, phone, password);

    if (!name) {
      alert('Please fill Name');
      return;
    }
    if (!email) {
      alert('Please fill Email');
      return;
    }
    if (!phone) {
      alert('Please fillPhone Number');
      return;
    }
    if (!password) {
      alert('Please fill Password');
      return;
    }
    if (!confrim - password) {
      alert('Please fill Confrim-Password');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO user_table (user_name,user_email, user_phone, user_password, user_confirm_password) VALUES (?,?,?)',
        [name, email, phone, password, confirm_password],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    navigation.navigate('Login');
                  },
                },
              ],
              {cancelable: false},
            );
          } else alert('Registration Failed');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <TextInputComponent
                value={name}
                placeholder={'Enter Name'}
                onChangeText={name => setName(name)}
              />
              <TextInputComponent
                value={email}
                placeholder="Enter Email"
                onChangeText={email => setEmail(email)}
              />
              <TextInputComponent
                value={phone}
                placeholder="Enter Contact No"
                onChangeText={phone => setPhone(phone)}
                maxLength={10}
                keyboardType="numeric"
              />
              <TextInputComponent
                value={password}
                placeholder="Enter Password"
                onChangeText={password => setPassword(password)}
                maxLength={50}
                secureTextEntery={true}
              />
              <TextInputComponent
                value={confirm_password}
                placeholder="Enter Confrim_password"
                onChangeText={confirm_password =>
                  setConfirm_Password(confirm_password)
                }
                maxLength={50}
                secureTextEntery={true}
              />
              <ButtonComponent
                style={Styles.btn}
                onPress={Register}
                title={'Register'}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}></Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}></Text>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: 'aqua',
    position: 'absolute',
  },
});
export default RegisterUser;
