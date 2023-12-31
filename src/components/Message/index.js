import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';

import { useContext } from 'react';
import { AuthContext } from '../../../utils/AuthContext';
// dayjs.extend(relativeTime);
import moment from 'moment';

const Message = ({ message }) => {
  const { currentUserNumber } = useContext(AuthContext);
  // console.log(message.user.phoneNumber);
  const isMyMessage = () => {
    const number = currentUserNumber
      ? currentUserNumber
      : currentUserNumber?._j;
    return message.sender.phoneNumber === number;
  };
  // console.log(message.sender.phoneNumber, currentUserNumber);

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
      <Text style={styles.time}>
        {/* {dayjs(message.createdAt).fromNow(true)} */}
        {moment(message.createdAt).format('HH:mm')}
        {/* 13:07 */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'black',
    // alignSelf:'flex-start',
    margin: 5,
    // marginTop:10,
    padding: 7,
    borderRadius: 10,
    maxWidth: '80%',
    minWidth: '35%',

    // Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOPacity: 0.22,
    shadowRadius: 2.22,

    elevation: 1,
    // flexDirection: 'row',
    // gap:10
  },
  message: {
    color: 'white',
    paddingLeft: 5,
    paddingRight: 5,
    // paddingRight: '10%',
  },
  time: {
    alignSelf: 'flex-end',
    marginTop: -2,
    marginBottom: -3,
    fontSize: 12,
    color: '#babfbd',
  },
});

export default Message;
