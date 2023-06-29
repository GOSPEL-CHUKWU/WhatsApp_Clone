import { Text, View, Image, StyleSheet,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const ChatListItem = ({ chat }) => {

  const navigation = useNavigation();

  return (
    <Pressable onPress={()=>console.warn('navigate')} style={styles.container}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />

      <Pressable onPress={()=>navigation.navigate('Chat',{id:chat.id,name:chat.user.name,image:chat.user.image})} style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>
            {dayjs(chat.lastMessage.createdAt).fromNow()}
          </Text>
        </View>

        <Text numberOfLines={1} style={[styles.subTitle,styles.text]}>
          {chat.lastMessage.text}
        </Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 10,
    gap:7,
    height: 60,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#3f403f',
  },
  content: {
    flex: 1,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: '#3f403f',
        marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,

  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    color: '#dce3e3',
  },
  subTitle: {
    color: 'gray',
  },
  text:{
    width:300
  }
});

export default ChatListItem;
