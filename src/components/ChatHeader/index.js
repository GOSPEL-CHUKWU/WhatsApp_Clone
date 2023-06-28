import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faEllipsisVertical,
  faPhone,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={[styles.icon, styles.arrow]}
            size={20}
          />
          <Image
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg',
            }}
            style={styles.image}
          />
          <View>
            <Text style={styles.headerText}>Lukas</Text>
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
    gap: 5,
    // justifyContent: 'space-between',

    // backgroundColor:'blue'
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
