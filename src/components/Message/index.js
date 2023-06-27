import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const index = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? '#077049' : '#15151c',
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text style={styles.message}>{message.text}</Text>
      <Text
        style={[
          styles.time,
        //   {
        //     color: isMyMessage() ? '#babfbd' : 'gray',
        //   },
        ]}
      >
        {/* {dayjs(message.createdAt).fromNow(true)} */}
        13:07
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'black',
    // alignSelf:'flex-start',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    minWidth: '50%',
    // flexDirection: 'row',
  },
  message: {
    color: 'white',
    // paddingRight: '10%',
  },
  time: {
    alignSelf: 'flex-end',
    fontSize:12,
    color:'#babfbd'
  },
});

export default index;
