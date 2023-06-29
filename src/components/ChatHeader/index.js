import { View, Text, StyleSheet, Image, Pressable,TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  faArrowLeft,
  faEllipsisVertical,
  faPhone,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

const ChatHeader = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <TouchableOpacity style={styles.navigation} onPress={() => navigation.navigate('Chats')}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={[styles.icon, styles.arrow]}
              size={20}
            />
            <Image
              source={{
                uri: route.params.image,
              }}
              style={styles.image}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>{route.params.name}</Text>
            <Text style={styles.subHeader}>online</Text>
          </View>
        </View>
        <View style={styles.right}>
          <FontAwesomeIcon icon={faVideo} style={[styles.icon]} size={20} />
          <FontAwesomeIcon icon={faPhone} style={[styles.icon]} size={17} />
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            style={[styles.icon]}
            size={18}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16161D',
    // borderBottomColor: "#0e9669 ",
    // borderBottomWidth: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 10,
  },

  left: {
    // marginHorizontal: 18,
    // marginVertical: 25,
    // marginTop: 45,
    flexDirection: 'row',
    gap: 4,
    marginLeft: 5,
    // justifyContent: 'space-between',

    // backgroundColor:'blue'
  },
  navigation:{
    flexDirection:'row',
    gap:3,
  },
  icon: {
    color: 'white',
  },
  arrow: {
    marginTop: 10,
    marginLeft: 5,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginTop: 5,
    marginRight: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#3f403f',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    // backgroundColor: 'red',
    color: 'white',
    // fontFamily: "Helvetica",
  },
  right: {
    flexDirection: 'row',
    // marginVertical:25,
    // justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
    gap: 25,
    // backgroundColor: "orange",
  },
  //   group: {
  //     // flex: 1,
  //     marginTop: 4,
  //     // marginRight: -27,
  //     marginLeft: -5,
  //   },

  //   calls: {
  //     paddingRight: 10,
  //     marginRight: 20,
  //   },
  subHeader: {
    fontSize: 17,
    // marginHorizontal: 5,
    // paddingBottom: 13,
    // paddingLeft: 20,
    color: 'gray',
    // backgroundColor: "yellow",
  },
});

export default ChatHeader;
