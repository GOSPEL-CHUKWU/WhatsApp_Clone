import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCamera,
  faEllipsisVertical,
  faMagnifyingGlass,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const HomepageHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.header}>
          <Text style={styles.headerText}>WhatsApp</Text>
          <View style={styles.headerIcons}>
            <FontAwesomeIcon
              icon={faCamera}
              style={[styles.icon, styles.camera]}
              size={22}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={styles.icon}
              size={18}
            />
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              style={styles.icon}
              size={18}
            />
          </View>
        </View>
        <View style={styles.row}>
          <FontAwesomeIcon
            icon={faUsers}
            style={[styles.icon, styles.group]}
            size={23}
          />
          <View style={[styles.chats, styles.active]}>
            <Text style={[styles.subHeader, { fontWeight: '700' }]}>
              Chats{' '}
            </Text>
            <Text style={styles.unread}>4</Text>
          </View>
          <Text style={[styles.subHeader, styles.status]}>Status</Text>
          <Text style={[styles.subHeader, styles.calls]}>Calls</Text>
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
  column: {
    flexDirection: 'column',
  },
  icon: {
    color: 'gray',
  },
  header: {
    marginHorizontal: 18,
    marginVertical: 29,
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',

    // backgroundColor:'blue'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 27,
    color: 'gray',
    flex: 2,
    // fontFamily: "Helvetica",
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 4,
  },
  camera: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    // backgroundColor: "orange",
  },
  group: {
    // flex: 1,
    marginTop: 4,
    // marginRight: -27,
    marginLeft: -5,
  },
  chats: {
    flexDirection: 'row',
    marginLeft: -27,
  },
  active: {
    borderBottomColor: '#0e9669',
    borderBottomWidth: 2.3,
    borderRadius: 1,
    color: '#0e9669',
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
    marginRight: 23,
    color: '#16161D',
  },
  status: {
    paddingRight: 10,
    marginLeft: -20,
  },
  calls: {
    paddingRight: 10,
    marginRight: 20,
  },
  subHeader: {
    fontSize: 16,
    marginHorizontal: 5,
    paddingBottom: 13,
    paddingLeft: 20,
    color: 'gray',
    // backgroundColor: "yellow",
  },
});

export default HomepageHeader;
