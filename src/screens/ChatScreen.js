import { useEffect } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ChatHeader from '../components/ChatHeader';
import Message from '../components/Message';
import bg from '../../assets/images/darkBG.jpg';
import messages from '../../assets/data/messages.json';
import InputBox from '../components/InputBox';
// import chats from '../../assets/data/chats.json';

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
      // headerShown:false,
    });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.bg}
      keyboardVerticalOffset={Platform.OS === 'ios'?60:90}
    >
      <ImageBackground source={bg} style={styles.bg}>
        {/* <ChatHeader /> */}
        <ScrollView>
          <FlatList
            scrollEnabled={false}
            data={messages}
            renderItem={({ item }) => <Message message={item} />}
            style={styles.list}
            inverted
          />
        </ScrollView>
        <InputBox />
      </ImageBackground>
     </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
    // marginVertical:10,
    // paddingVertical:-100
  },
});

export default ChatScreen;
