import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faUserGroup,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

import chats from '../../assets/data/chats.json';
import ContactListItem from '../components/ContactListItem';
import * as Contacts from 'expo-contacts';

const InviteComponent = ({ contacts }) => {
  return (
    <View
      style={[
        styles.newContainer,
        { flexDirection: 'row', justifyContent: 'space-between' },
      ]}
    >
      <View style={styles.new}>
        <View
          style={[
            styles.iconsbg,
            { backgroundColor: '#8b8c94', color: 'white', overflow: 'hidden' },
          ]}
        >
          <FontAwesomeIcon
            icon={faUser}
            style={[styles.icons, { marginLeft: 6, marginTop: 10.8 }]}
            size={28}
          />
        </View>
        <Text style={styles.text}>{contacts.name}</Text>
      </View>
      <Text
        style={{
          color: '#0e9669',
          marginHorizontal: 30,
          marginVertical: 10,
          fontSize: 16,
          fontWeight: '600',
          letterSpacing: 0.4,
        }}
      >
        Invite
      </Text>
    </View>
  );
};

const ContactScreen = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.PHONE_NUMBERS],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.newContainer}>
        <View style={styles.new}>
          <View style={styles.iconsbg}>
            <FontAwesomeIcon
              icon={faUserGroup}
              style={[styles.icons, { marginLeft: 6, marginTop: 5 }]}
              size={28}
            />
          </View>
          <Text style={styles.text}>New group</Text>
        </View>
        <View style={styles.new}>
          <View style={styles.iconsbg}>
            <FontAwesomeIcon
              icon={faUserPlus}
              style={[styles.icons, { marginLeft: 11, marginTop: 8 }]}
              size={22}
            />
          </View>
          <Text style={styles.text}>New contact</Text>
        </View>
        <View style={styles.new}>
          <View style={styles.iconsbg}>
            <FontAwesomeIcon
              icon={faUsers}
              style={[styles.icons, { marginLeft: 9, marginTop: 9 }]}
              size={22}
            />
          </View>
          <Text style={styles.text}>New community</Text>
        </View>
      </View>

      <Text style={styles.subHeader}>Contacts on Whatsapp</Text>

      <FlatList
        data={chats}
        renderItem={({ item }) => <ContactListItem chat={item} />}
        scrollEnabled={false}
      />

      <Text style={styles.subHeader}>Invite to Whatsapp</Text>

      <FlatList
        data={contacts}
        renderItem={({ item }) => <InviteComponent contacts={item} />}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#15151c',
  },
  newContainer: {
    marginHorizontal: 15,
    marginVertical: 20,
    gap: 30,
  },
  new: {
    flexDirection: 'row',
    gap: 15,
  },
  iconsbg: {
    backgroundColor: '#0e9669',
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  icons: {
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 10,
  },
  subHeader: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    marginHorizontal: 18,
    marginVertical: 5,
  },
});

export default ContactScreen;
