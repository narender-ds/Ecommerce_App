// import React, {useState} from 'react';
// import {
//   View,
//   ScrollView,
//   KeyboardAvoidingView,
//   Alert,
//   SafeAreaView,
//   Text,
// } from 'react-native';
// import 'react-native-gesture-handler';

// import {openDatabase} from 'react-native-sqlite-storage';
// import ButtonComponent from '../Components/ButtonComponent';
// import TextInputComponent from '../Components/TextInputComponent';

// var db = openDatabase({name: 'Ecommerce.db'});

// const App = ({navigation}) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirm_password, setConfirm_Password] = useState('');

//   useEffect(() => {
//     db.transaction(function (txn) {
//       txn.executeSql(
//         "SELECT name FROM sqlite_master WHERE type='table' AND name='user_table",
//         [],
//         function (tx, res) {
//           console.log('item:', res.rows.length);
//           if (res.rows.length == 0) {
//             txn.executeSql('DROP TABLE IF EXISTS user_table', []);
//             txn.executeSql(
//               'CREATE TABLE IF NOT EXISTS user_table(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(50),user_email Varchar(20), user_phone INT(10), user_password VARCHAR(255) , user_confirm-password(255))',
//               [],
//             );
//           }
//         },
//       );
//     });
//   }, []);

//   // const Register = () => {
//   //   console.log(name, email, phone, password);

//   //   if (!name) {
//   //     alert('Please fill Name');
//   //     return;
//   //   }
//   //   if (!email) {
//   //     alert('Please fill Email');
//   //     return;
//   //   }
//   //   if (!phone) {
//   //     alert('Please fillPhone Number');
//   //     return;
//   //   }
//   //   if (!password) {
//   //     alert('Please fill Password');
//   //     return;
//   //   }
//   //   if (!confrim - password) {
//   //     alert('Please fill Confrim-Password');
//   //     return;
//   //   }
//   const insertData = () => {
//     db.transaction(function (tx) {
//       tx.executeSql(
//         'INSERT INTO user_table (user_name,user_email, user_phone, user_password, user_confirm_password) VALUES (?,?,?)',
//         [name, email, phone, password, confirm_password],
//         (tx, results) => {
//           console.log('Results', results.rowsAffected);
//           if (results.rowsAffected > 0) {
//             Alert.alert(
//               'Success',
//               'You are Registered Successfully',
//               [
//                 {
//                   text: 'Ok',
//                   onPress: () => {
//                     navigation.navigate('Login');
//                   },
//                 },
//               ],
//               {cancelable: false},
//             );
//           } else alert('Registration Failed');
//         },
//       );
//     });

//     viewUser();
//   };
//   const viewUser = () => {
//     db.transaction(tx => {
//       tx.executeSql('SELECT * FROM user_table', [], (tx, results) => {
//         var temp = [];
//         for (let i = 0; i < results.rows.length; ++i)
//           temp.push(results.rows.item(i));
//         console.log(temp);
//       });
//     });
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{flex: 1, backgroundColor: 'white'}}>
//         <View style={{flex: 1}}>
//           <ScrollView keyboardShouldPersistTaps="handled">
//             <KeyboardAvoidingView
//               behavior="padding"
//               style={{flex: 1, justifyContent: 'space-between'}}>
//               <TextInputComponent
//                 value={name}
//                 placeholder={'Enter Name'}
//                 onChangeText={name => setName(name)}
//               />
//               <TextInputComponent
//                 value={email}
//                 placeholder="Enter Email"
//                 onChangeText={email => setEmail(email)}
//               />
//               <TextInputComponent
//                 value={phone}
//                 placeholder="Enter Contact No"
//                 onChangeText={phone => setPhone(phone)}
//                 maxLength={10}
//                 keyboardType="numeric"
//               />
//               <TextInputComponent
//                 value={password}
//                 placeholder="Enter Password"
//                 onChangeText={password => setPassword(password)}
//                 maxLength={50}
//                 secureTextEntery={true}
//               />
//               <TextInputComponent
//                 value={confirm_password}
//                 placeholder="Enter Confrim_password"
//                 onChangeText={confirm_password =>
//                   setConfirm_Password(confirm_password)
//                 }
//                 maxLength={50}
//                 secureTextEntery={true}
//               />
//               <ButtonComponent
//                 style={Styles.btn}
//                 onPress={insertData}
//                 title={'Register'}
//               />
//             </KeyboardAvoidingView>
//           </ScrollView>
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey',
//           }}></Text>
//         <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'grey',
//           }}></Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const Styles = StyleSheet.create({
//   btn: {
//     justifyContent: 'center',
//     borderRadius: 18,
//     backgroundColor: 'aqua',
//     position: 'absolute',
//   },
// });
// export default App;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import SplashScreen from './Screens/SpalshScreen';
import Login from './Screens/LoginScreen';
import Register from './Screens/RegisterScreen'

const Stack= createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
          <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
</Stack.Navigator>
</NavigationContainer>
  )
  }
export default App;
