import { View, FlatList, StyleSheet } from "react-native";
import ChatListItem from "../components/ChatListItem";
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import chats from "../../assets/data/chats.json";

const ChatListScreen = () => {
  return (
    <View>
      <Header />
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
        style={styles.chatListTopAndBottom}
      />
      <Contacts />
    </View>
  );
};

const styles = StyleSheet.create({
  chatListTopAndBottom: {
    marginBottom: 60,
  },
});

export default ChatListScreen;
