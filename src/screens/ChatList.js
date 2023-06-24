import { View, FlatList, StyleSheet } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import Header from '../components/Header';
import chats from '../../assets/data/chats.json';

const ChatListScreen = () => {
  return (
    <View>
      <Header />
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        style={styles.chatListTopAndBottom}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatListTopAndBottom: {
    marginBottom: 60,
  },
});

export default ChatListScreen;
