import { View, Text,StyleSheet } from 'react-native'


const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Community Is Not Available At The Moment</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#15151c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { 
    color: 'white',
    fontSize:18
  },
});

export default CommunityScreen