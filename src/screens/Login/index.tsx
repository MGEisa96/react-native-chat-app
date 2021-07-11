import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
const Login = () => {
  const [user, setUser] = React.useState();
  const [userName, setUserName] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const onAuthStateChanged = value => {
    setUser(value);
    setLoading(false);
  };
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuth = () => {
    auth()
      .signInAnonymously()
      .then(() => {
        navigate('Home');
        console.log('User signed in anonymously');
      })
      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  };
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="User Name"
        style={styles.input}
        onChangeText={val => setUserName(val)}
      />
      <Button title={'Go'} onPress={() => onAuth()} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 18,
    padding: 10,
    marginVertical: 20,
  },
});
