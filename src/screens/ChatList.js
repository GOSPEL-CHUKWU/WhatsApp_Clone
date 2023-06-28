import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import HomepageHeader from '../components/HomepageHeader';
import Contacts from '../components/Contacts';
import chats from '../../assets/data/chats.json';

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      <HomepageHeader />
      {/* <ScrollView> */}
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
      />
      {/* </ScrollView> */}
      <Contacts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default ChatListScreen;
