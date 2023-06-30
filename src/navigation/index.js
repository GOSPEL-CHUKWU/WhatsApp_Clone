import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import ChatListScreen from '../screens/ChatList';
import ChatScreen from '../screens/ChatScreen';
import HomepageHeader from '../components/HomepageHeader';
import ChatHeader from '../components/ChatHeader';
import ContactsHeader from '../components/ContactsHeader';
import MainTabNavigator from './MainTabNavigator';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={MainTabNavigator}
          options={{
            header: () => <HomepageHeader name="Tabs" />,
          }}
        />
        {/* <Stack.Screen
          name="Chats"
          component={ChatListScreen}
          options={{
            header: () => <HomepageHeader name="Chats" />,
          }}
        /> */}
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            header: () => <ChatHeader name="Chat" />,
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactScreen}
          options={{
            header: () => <ContactsHeader name="Chat" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
