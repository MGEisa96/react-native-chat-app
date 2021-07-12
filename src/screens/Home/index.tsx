import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, FlatList, View, StyleSheet, Alert} from 'react-native';
import Avatar from '../../componnent/Avatar';
import ProfilesCard from '../../componnent/ProfilesCard';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [users, setUsers] = React.useState<any>([]);
  const {navigate, setOptions} = useNavigation();
  const keyExtractor = ({}) => `${Math.random()}`;
  const LogOut = () =>
    auth()
      .signOut()
      .then(() => Alert.alert('User signed out!'));
  React.useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <Text style={styles.logOutStyle} onPress={() => LogOut()}>
          Sign out
        </Text>
      ),
    });
  });

  const usersCollection = () => {
    firestore()
      .collection('users')
      .onSnapshot(val => {
        setUsers(val.docs.map(i => ({...i.data(), id: i.id})));
      });
  };
  console.log('users', users);
  React.useEffect(() => {
    usersCollection();
  }, []);

  console.log('usersCollection', usersCollection);
  return (
    <View style={styles.perantWrappar}>
      <Text style={styles.titleStyle}>Chat with Your Friends</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={users}
        contentContainerStyle={styles.headerList}
        keyExtractor={keyExtractor}
        renderItem={({item}) => (
          <Avatar onPress={() => navigate('Chat', {item: item})} />
        )}
      />
      <FlatList
        data={users}
        keyExtractor={keyExtractor}
        style={styles.chatlistStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ProfilesCard
            onPress={() => navigate('Chat', {item: item})}
            item={item}
          />
        )}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  perantWrappar: {
    flex: 1,
    backgroundColor: '#0d1975',
  },
  chatlistStyle: {
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 20,
  },
  headerList: {
    paddingVertical: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: 'bold',
    marginVertical: 25,
    marginHorizontal: 10,
  },
  logOutStyle: {
    fontSize: 17,
    color: '#0d1975',
    paddingHorizontal: 10,
  },
});
