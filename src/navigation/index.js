import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import ChatListScreen from '../screens/ChatList';
import ChatScreen from '../screens/ChatScreen';
import HomepageHeader from '../components/HomepageHeader';
import ChatHeader from '../components/ChatHeader';
import NewGroupHeader from '../components/NewGroupHeader';
import ContactsHeader from '../components/ContactsHeader';
import MainTabNavigator from './MainTabNavigator';
import ContactScreen from '../screens/ContactScreen';
import NewGroup from '../screens/NewGroupScreen';
import AccessScreen from '../screens/AccessScreen';
import { AuthContext, AuthProvider } from '../../utils/AuthContext';
import io from 'socket.io-client';

const Stack = createNativeStackNavigator();

const AppContent = () => {
  const socket = io.connect('http://192.168.204.157:5000');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        options={{
          header: () => <HomepageHeader name="Tabs" />,
        }}
      >
        {props => <MainTabNavigator {...props} socket={socket} />}
      </Stack.Screen>

      <Stack.Screen
        name="Chat"
        // component={ChatScreen}
        options={{
          header: () => <ChatHeader name="Chat" />,
        }}
      >
        {props => <ChatScreen {...props} socket={socket} />}
      </Stack.Screen>
      <Stack.Screen
        name="Contacts"
        // component={ContactScreen}
        options={{
          header: () => <ContactsHeader name="ContactsHeader" />,
        }}
      >
        {props => <ContactScreen {...props} socket={socket} />}
      </Stack.Screen>
      <Stack.Screen
        name="NewGroup"
        component={NewGroup}
        options={{
          header: () => <NewGroupHeader name="GroupHeader" />,
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken === null ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Access"
            component={AccessScreen}
            options={{
              header: () => {},
            }}
          />
        </Stack.Navigator>
      ) : (
        <AppContent  />
      )}
    </NavigationContainer>
  );
};

const Navigator = ({ socket }) => {
  return (
    <AuthProvider>
      <Navigation socket={socket} />
    </AuthProvider>
  );
};

export default Navigator;
