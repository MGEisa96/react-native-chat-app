import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export function Chat() {
  const {setOptions} = useNavigation();
  const [messages, setMessages] = useState([]);

  const {item} = useRoute().params;
  console.log(item);

  const getChatGroup = () => {
    firestore()
      .collection('chat')
      .doc('group')
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .onSnapshot(val => {
        return setMessages(
          val.docs.map(i => ({
            _id: i.id,
            ...i.data(),
          })),
        );
      });
  };
  useLayoutEffect(() => {
    setOptions({
      headerTitle: item.name,
    });
  });
  useEffect(() => {
    getChatGroup();
  }, []);

  const onSend = useCallback((message = '') => {
    firestore()
      .collection('chat')
      .doc('group')
      .collection('messages')
      .add({
        text: message,
        createdAt: new Date().getTime(),
        user: {
          _id: auth().currentUser?.uid,
          name: auth().currentUser?.displayName,
          avatar: 'https://placeimg.com/140/140/any',
        },
      });
  }, []);
  function renderInputToolbar(props) {
    return (
      <InputToolbar
        {...props}
        primaryStyle={styles.inputToolbarStyle}
        containerStyle={{borderTopWidth: 0}}
      />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      // renderBubble={renderBubble}
      onSend={val => onSend(val[0].text)}
      alwaysShowSend
      messagesContainerStyle={styles.messagesContainerStyle}
      renderInputToolbar={renderInputToolbar}
      placeholder="Type your message..."
      user={{
        _id: auth().currentUser?.uid.toString() || '0',
      }}
    />
  );
}
const styles = StyleSheet.create({
  messagesContainerStyle: {
    backgroundColor: '#ffff',
    paddingVertical: 30,
  },
  inputToolbarStyle: {
    marginVertical: 10,
    borderRadius: 100,
    backgroundColor: '#dddd',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    height: 60,
  },
});
export default Chat;
