import { Text, View, Image, StyleSheet } from 'react-native';

const index = ({chat}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: {chat.user.image},
        }}
        style={styles.image}
      />

      <View style={styles.conternt}>
        <View style={styles.row}>
          <Text numberOfLines={1}  style={styles.name}>{chat.user.name}</Text>
          <Text style={styles.subTitle}>{chat.lastMessage.createdAt}</Text>
        </View>

        <Text numberOfLines={1} style={styles.subTitle}>{chat.lastMessage.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,

    height: 60,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  content: { 
    flex: 1,

    borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'lightgray'
  },
  row: { 
    flexDirection: 'row',
    marginBottom:5 ,
  },
  name: {
    flex: 1,
    fontWeight: 'bold' 
  },
  subTitle: { 
    color: 'gray' 
  },
});

export default index;
