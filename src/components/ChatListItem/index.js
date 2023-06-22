import { Text, View, Image, StyleSheet } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'http://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1}  style={styles.name}>Lukas Ben </Text>
          <Text style={styles.subTitle}>8:45</Text>
        </View>

        <Text numberOfLines={1} style={styles.subTitle}>Hello Lukas</Text>
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
