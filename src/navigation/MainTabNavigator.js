import { View, StyleSheet, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatListScreen from './../screens/ChatList';
import CallsScreen from '../screens/CallsScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ContactScreen from './../screens/ContactScreen';
import StatusScreen from './../screens/StatusScreen';
import CameraScreen from './../screens/CameraScreen';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Tab = createMaterialTopTabNavigator();

const MainTabNavigator = ({ socket }) => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: '#0e9669',
        pressColor: '#0e9669',
        pressOpacity: 0.9,
        labelStyle: {
          fontSize: 16,
          textTransform: 'none',
          width: 78,
          color: 'gray',
        },
        style: {
          backgroundColor: '#15181D',
          elevation: 0,
        },
        indicatorStyle: {
          backgroundColor: '#0e9669',
          // color:'#0e9669',
          // fontWeight: 'bold',
          width: 1,
        },
        tabStyle: {
          width: 'auto',
          marginLeft: 10,
          marginRight: 10,
          alignItems: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          title: () => (
            <FontAwesomeIcon
              icon={faUsers}
              style={{ color: 'gray' }}
              size={23}
            />
          ),
          // tabBarStyle: {
          //   width: 50,
          // },
          // indicatorStyle: {
          //   backgroundColor: 'green',
          //   width: 100,
          // },
        }}
      />
      <Tab.Screen
        name="Chats"
        options={{
          title: () => (
            <View style={styles.chats}>
              <Text style={[styles.subHeader]}>Chats </Text>
              <Text style={[styles.unread, { opacity: 0 }]}>4</Text>
            </View>
          ),
        }}
      >
        {props => <ChatListScreen {...props} socket={socket} />}
      </Tab.Screen>
      <Tab.Screen name="Status" component={StatusScreen} />
      <Tab.Screen name="Calls" component={CallsScreen} />
      {/* <Tab.Screen name='Camera' component={CameraScreen}/> */}
      {/* <Tab.Screen name='Contacts' component={ContactScreen}/> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  chats: {
    flexDirection: 'row',
  },
  unread: {
    fontSize: 13,
    backgroundColor: '#3a8c63',
    height: 18,
    width: 18,
    borderRadius: 9,
    textAlign: 'center',
    paddingTop: 1,
    paddingRight: 1.2,
    marginTop: 2,
    color: '#16161D',
  },
  subHeader: {
    fontSize: 16,
    marginHorizontal: 5,
    color: 'gray',
  },
});

export default MainTabNavigator;
