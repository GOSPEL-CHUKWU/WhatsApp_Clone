import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCamera,
  faEllipsisVertical,
  faMagnifyingGlass,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import MainTabNavigator from '../../navigation/MainTabNavigator';
import { AuthContext } from '../../../utils/AuthContext';
import { useContext } from 'react';

const HomepageHeader = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.header}>
          <Text
            style={styles.headerText}
            onPress={() => {
              logout();
            }}
          >
            WhatsApp
          </Text>
          <View style={styles.headerIcons}>
            <FontAwesomeIcon
              icon={faCamera}
              style={[styles.icon, styles.camera]}
              size={20}
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15181D',
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
    marginVertical: 20,
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
});

export default HomepageHeader;
