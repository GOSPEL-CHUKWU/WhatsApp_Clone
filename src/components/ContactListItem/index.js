import { useContext } from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './../../../utils/AuthContext';
dayjs.extend(relativeTime);

const ContactListItem = ({ chat, socket }) => {
  const navigation = useNavigation();
  const { currentUserNumber } = useContext(AuthContext);

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
          const number = await (currentUserNumber
            ? currentUserNumber
            : currentUserNumber?._j);
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

          socket.emit('receiving_user', {
            receiver: chat.phoneNumber,
            sender: number,
          });
        }}
        style={styles.content}
      >
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chat.name}
          </Text>
        </View>

        <Text numberOfLines={2} style={[styles.subTitle, styles.text]}>
          {chat.status}
        </Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 8,
    gap: 7,
    height: 60,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 5,
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
  name: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#dce3e3',
  },
  subTitle: {
    color: 'gray',
  },
  text: {
    width: 300,
  },
});

export default ContactListItem;
