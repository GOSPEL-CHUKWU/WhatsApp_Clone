import { Text, View, Image, StyleSheet,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const ContactListItem = ({ chat }) => {

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
        </View>

        <Text numberOfLines={2} style={[styles.subTitle,styles.text]}>
          {chat.user.status}
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
    gap:7,
    height: 60,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginTop:5,
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
  name: {
    flex: 1,
    fontSize:17,
    fontWeight: '600',
    color: '#dce3e3',
  },
  subTitle: {
    color: 'gray',
  },
  text:{
    width:300
  }
});

export default ContactListItem;
