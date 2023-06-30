import { Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons';

import { useNavigation } from '@react-navigation/native';

const Contacts = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Contacts')}
    >
      <FontAwesomeIcon
        icon={faSquarePollHorizontal}
        style={styles.contacts}
        size={24}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    backgroundColor: '#0e9669',
    padding: 15,
    borderRadius: 25,
  },
  contacts: {
    color: 'white',
  },
});

export default Contacts;
