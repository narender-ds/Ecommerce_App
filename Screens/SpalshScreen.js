import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

import ImageComponent from '../Components/ImageComponent';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user').then(value =>
        navigation.replace(value === null ? 'Login' : 'Register'),
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageComponent
        source={require('../Image/splash.png')}
        style={styles.img}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3DA4A2',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  img: {
    width: 150,
    resizeMode: 'contain',
    margin: 15,
  },
});
