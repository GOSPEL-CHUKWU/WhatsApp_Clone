import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import HomepageHeader from '../components/HomepageHeader';
import Contacts from '../components/Contacts';
// import chats from '../../assets/data/chats.json';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../utils/AuthContext';
import { BASE_URL } from '../../utils/config';
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const ChatListScreen = ({ socket }) => {
  const { currentUser, currentUserNumber } = useContext(AuthContext);
  const [chats, setChats] = useState();
  // const [info, setInfo] = useState();
  // const [isOneTime, setIsOneTime] = useState(false);
  // const [isInfoGotten, setIsInfoGotten] = useState(false);

  // socket.on('getLastMessage', async data => {
  //   console.log(data);
  // });

  useEffect(() => {
    const getUsers = async ({ id }) => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/getUsers/${id}`);
        setChats(data);
      } catch (error) {
        setIsLoading(false);
        throw error.response.data;
      }
    };

    getUsers({ id: currentUser });
    // setIsOneTime(true);
  }, [currentUser]);

  // console.log(chats);
  // console.warn(chats);
  // const setUserInfo = () => {
  //   const number = currentUserNumber
  //     ? currentUserNumber
  //     : currentUserNumber?._j;

  //   chats.forEach(chat => {
  //     setInfo(prev => {
  //       return [
  //         ...prev,
  //         {
  //           user: chat.name,
  //           receiver: chat.phoneNumber,
  //           sender: number,
  //         },
  //       ];
  //     });
  //   });
  //   setIsOneTime(false);
  //   setIsInfoGotten(true);
  // };
  // if (isOneTime) setUserInfo();

  // const emitWait = () => {
  //   socket.emit('activateChatList', info);
  //   setIsInfoGotten(false);
  // };
  // if (isInfoGotten) emitWait();

  return (
    <View style={styles.container}>
      {/* <HomepageHeader /> */}
      {/* <ScrollView> */}
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatListItem
            chat={item}
            socket={socket}
            currentUserNumber={currentUserNumber}
          />
        )}
      />
      {/* </ScrollView> */}
      <Contacts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#15151c',
  },
});

export default ChatListScreen;
