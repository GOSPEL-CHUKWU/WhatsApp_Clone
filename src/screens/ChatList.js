import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import Header from '../components/Header';
import Contacts from '../components/Contacts';
import chats from '../../assets/data/chats.json';

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <FlatList
          data={chats}
          renderItem={({ item }) => <ChatListItem chat={item} />}
          style={styles.chatListTopAndBottom}
        />
      </ScrollView>
      <Contacts />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    // paddingBottom: 140,
    height:'100%'
  },
  // chatListTopAndBottom: {
  //   marginBottom:80,
  // },
});

export default ChatListScreen;
