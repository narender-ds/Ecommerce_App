import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import ButtonComponent from '../Components/ButtonComponent';
import TextComponent from '../Components/TextComponent';
import TextInputComponent from '../Components/TextInputComponent';
// import SQLite from 'react-native-sqlite-storage';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
const navigation= useNavigation();

  const Validate=()=>{
    if(!email.trim()){
        Alert.alert("Login","Please Enter Email "
        [
            {
                text:"cancel",
                onPress:()=> console.log("cancel Pressed")
            },
            {
                text:"OK",
                onPress:()=>console.log("Ok Pressed")
            }
        ]);return;
    }
    if(!password.trim()){
        Alert.alert("Login","Please Enter Password"
        [
            {
                text:"cancel",
                onPress:()=>console.log("Cancel Pressed")
            },
            {
                text:"OK",
                onPress:()=>console.log("OK Pressed")
            }
        ]);return;
    }
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (emailReg.test(email) === false) {
        Alert.alert("Login","Email is Not Valid"
        [
            {
                text:"cancel",
                onPress:()=> console.log("cancel Pressed")
                        },
                        {
                            text:"OK",
                            onPress:()=>console.log("Ok Pressed")
                        }
        ]);  
  }
  else{
    LoginSuccess()
  }
}
  const LoginSuccess = () => {
    Alert.alert(
       "Login",
       "Login SucessFully"
       [
          {
             text: "Cancel",
             onPress: () => console.log("Cancel Pressed"),
             style: "cancel"
          },
          { text: "OK", onPress: () => { Navigation.replace("HomeScreen",) } }
       ]

    );
    setEmail('')
    setPassword('')

 }
  return (
    <SafeAreaView>
      <View>
        <TextComponent style={Styles.HeadingText} Text={'Login Page'} />
        <TextInputComponent
          value={email}
          placeholder={'Email'}
          onChangeText={email => setEmail(email)}
        />

        <TextInputComponent
          value={password}
          placeholder={'Password'}
          onChangeText={password => setPassword(password)}
        />
        <ButtonComponent
            style={Styles.btn}
            onPress={Validate}
            Title={"Login"}
        />
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  HeadingText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Login;
