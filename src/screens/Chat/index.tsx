import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {useDispatch, useSelector} from 'react-redux';
import {changeMsg} from '../../redux/action';
import {CHANGEMSG} from '../../redux/action/keys';

export function Chat() {
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();
  const msg = useSelector(state => state?.msg);
  useEffect(
    () =>
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ]),
    [],
  );
  useEffect(() => {
    dispatch(changeMsg({type: CHANGEMSG, payload: messages}));
  }, [dispatch, messages]);
  console.log('msg: ', msg);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
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
      messages={msg}
      // renderBubble={renderBubble}
      onSend={val => onSend(val)}
      alwaysShowSend
      messagesContainerStyle={styles.messagesContainerStyle}
      renderInputToolbar={renderInputToolbar}
      placeholder="Type your message..."
      user={{
        _id: 1,
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
