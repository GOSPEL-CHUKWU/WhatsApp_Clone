import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  faArrowLeft,
  faEllipsisVertical,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import * as Contacts from 'expo-contacts';

const ChatHeader = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [contacts, setContacts] = useState([]);
  const [activityIndicatorIsSpinning, setActivityIndicatorIsSpinning]=useState(true)

  useEffect(() => {
    (async () => {
      setActivityIndicatorIsSpinning(true)
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.PHONE_NUMBERS],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      setActivityIndicatorIsSpinning(false)
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.left}>
          <TouchableOpacity
            style={styles.navigation}
            onPress={() => navigation.navigate('Chats')}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={[styles.icon, styles.arrow]}
              size={20}
            />
          </TouchableOpacity>
          <View> 
            <Text style={styles.headerText}>Select contacts</Text>
            <Text style={styles.subHeader}>{contacts.length} contacts</Text>
          </View>
        </View>
        <View style={styles.right}>
          {activityIndicatorIsSpinning?<ActivityIndicator
            style={styles.activity}
            size="small"
            color="#fff"
          />:''}
          <FontAwesomeIcon icon={faSearch} style={[styles.icon]} size={20} />
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            style={[styles.icon]}
            size={21}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15181D',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 10,
  },

  left: {
    flexDirection: 'row',
    gap: 30,
    marginLeft: 10,
  },
  navigation: {
    flexDirection: 'row',
    gap: 3,
  },
  icon: {
    color: 'white',
  },
  arrow: {
    marginTop: 10,
    marginLeft: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 23,
    color: 'white',
  },
  right: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10,
    gap: 25,
  },
  activity: {
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 17,
    color: 'white',
  },
});

export default ChatHeader;
