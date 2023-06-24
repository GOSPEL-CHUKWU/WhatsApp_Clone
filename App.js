import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatListScreen from './src/screens/ChatList';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListScreen />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15151c',
    // alignItems: 'center',
    // justifyContent: 'center',
   paddingBottom:75
  },
});
