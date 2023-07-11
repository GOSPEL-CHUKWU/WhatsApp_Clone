import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
dayjs.extend(relativeTime);

const ChatListItem = ({ chat, socket, currentUserNumber }) => {
    const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => console.warn('navigate')}
      style={styles.container}
    >
      <View
        style={[
          styles.iconsbg,
          { backgroundColor: '#8b8c94', color: 'white', overflow: 'hidden' },
        ]}
      >
        <FontAwesomeIcon
          icon={faUser}
          style={[styles.icons, { marginLeft: 5.5, marginTop: 10.8 }]}
          size={39}
        />
      </View>
      <Pressable
        onPress={async () => {

          // console.log(number);
          // let number;
          // if (currentUserNumber) {
          //   number = currentUserNumber;
          // } else number = currentUserNumber?._j;
          // console.log('currently', number, currentUserNumber);

          navigation.navigate('Chat', {
            number: chat.phoneNumber,
            name: chat.name,
            
          });
        }}
        style={styles.content}
      >
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chat.name}
          </Text>
          <Text style={styles.subTitle}>
            {/* {dayjs(chat.lastMessage.createdAt).fromNow()} */}
            online
          </Text>
        </View>

        <Text numberOfLines={1} style={[styles.subTitle, styles.text]}>
          {/* {chat.lastMessage.text} */}
          Fake Last Message
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
    gap: 7,
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
  iconsbg: {
    backgroundColor: '#0e9669',
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  icons: {
    color: 'white',
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
    fontSize: 17,
  },
  subTitle: {
    color: 'gray',
  },
  text: {
    width: 300,
  },
});

export default ChatListItem;
