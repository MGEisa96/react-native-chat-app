import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Button, Text, View} from 'react-native';

const Home = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Button title={'Chat'} onPress={() => navigate('Chat')} />
    </View>
  );
};

export default Home;
