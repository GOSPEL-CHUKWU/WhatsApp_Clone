import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigator from './src/navigation'
// import * as Font from "expo-font";
// import { useEffect } from "react";

export default function App() {
  // useEffect(()=>{
  //   async function loadFont(){
  //     await Font.loadAsync({
  //       'custom-font': require('./assets/fonts/Sawah.ttf')
  //     });
  //     Text.defaultProps.style.fontFamily='custom-font'
  //   }
  //   loadFont()
  // },[])

  return (
    <View style={styles.container}>
      <Navigator/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15151c',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
