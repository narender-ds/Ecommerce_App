import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextComponent from './Components/TextComponent';
import {openDatabase} from 'react-native-sqlite-storage';
import ButtonComponent from '../Components/ButtonComponent';


var db = openDatabase({ name: 'Ecommerce.db' });
  

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user_table",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS user_table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS user_table(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(50),user_email Varchar(20), user_phone INT(10), user_password VARCHAR(255) , user_confirm-password(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <TextComponent Text="Welcome" />
          <ButtonComponent
            title="Register"
            onPress={() => navigation.navigate('Register')}
          />
          <ButtonComponent
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
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

export default HomeScreen;

// import React from 'react';
// import {View, SafeAreaView, StyleSheet} from 'react-native';
// import TextComponent from '../Components/TextComponent';

// const HomeScreen = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <TextComponent
//           style={Styles.HeadingText}
//           Text={'Welcome To The HomeScreen'}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const Styles = StyleSheet.create({
//   HeadingText: {
//     textAlign: 'center',
//     fontSize: 25,
//     fontWeight: 15,
//   },
// });

// export default HomeScreen;
