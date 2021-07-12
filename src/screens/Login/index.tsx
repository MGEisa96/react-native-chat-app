import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, StyleSheet, Button, Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TextInput} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import {current} from '@reduxjs/toolkit';
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [passWord, setPassWord] = React.useState('');
  const [name, setName] = React.useState('');
  const [singUp, setSingUp] = React.useState(false);
  const handelLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, passWord)
      .then(() => {
        Alert.alert('User account created & signed in!');
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };
  const onSigneUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, passWord)
      .then(() => {
        auth().currentUser?.updateProfile({
          displayName: name,
        });

        firestore().collection('users').add({
          name,
          email,
        });
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      {singUp && (
        <TextInput
          placeholder="Your Name"
          onChangeText={value => setName(value)}
          style={styles.input}
        />
      )}
      <TextInput
        placeholder="Your Email"
        style={styles.input}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={value => setPassWord(value)}
        secureTextEntry={true}
      />
      <Button
        onPress={() => {
          singUp ? setSingUp(false) : handelLogin();
        }}
        title={'LogIn'}
      />
      <Text style={{marginTop: 20}}> Or </Text>
      <Button
        onPress={singUp ? () => onSigneUp() : () => setSingUp(true)}
        title={singUp ? 'Submit' : 'SingUp'}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
  },
  button: {
    width: 200,
    justifyContent: 'center',
    marginVertical: 20,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 6,
    },
  },
  input: {
    width: '95%',
    height: 60,
    marginVertical: 15,
    borderRadius: 25,
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
