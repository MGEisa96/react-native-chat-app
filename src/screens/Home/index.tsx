import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';
import Avatar from '../../componnent/Avatar';
import ProfilesCard from '../../componnent/ProfilesCard';

const Home = () => {
  const {navigate} = useNavigation();
  const keyExtractor = ({}) => `${Math.random()}`;
  return (
    <View style={styles.perantWrappar}>
      <Text style={styles.titleStyle}>Chat with Your Friends</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={['1', '2', '3', '4', '5', '6']}
        contentContainerStyle={styles.headerList}
        keyExtractor={keyExtractor}
        renderItem={() => <Avatar onPress={() => navigate('Chat')} />}
      />
      <FlatList
        data={['1', '2', '3', '4', '5', '6']}
        keyExtractor={keyExtractor}
        style={styles.chatlistStyle}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ProfilesCard onPress={() => navigate('Chat')} />
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
});
