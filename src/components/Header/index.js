import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.header}>
          <Text style={styles.headerText}>WhatsApp</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.chats, styles.active]}>
            <Text style={[styles.subHeader, {fontWeight: '700'}]}>Chats </Text>
            <Text style={styles.unread}>4</Text>
          </View>
          <Text style={[styles.subHeader, { paddingRight: 10 }]}>Status</Text>
          <Text style={[styles.subHeader, { paddingRight: 10 }]}>Calls</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16161D',
    borderBottomColor: '#22232b ',
    borderBottomWidth: 2,
    // fontFamily: 'OpenSans',
  },
  column: {
    flexDirection: 'column',
  },
  header: {
    marginHorizontal: 15,
    marginVertical: 20,
    marginTop: 40,
    // backgroundColor:'blue'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
  },
  chats: {
    flexDirection: 'row',
  },
  active: {
    borderBottomColor: '#3a8c63',
    borderBottomWidth: 2.4,
  },
  unread: {
    fontSize: 13,
    backgroundColor: '#3a8c63',
    height: 18,
    width: 18,
    borderRadius: 9,
    textAlign: 'center',
    paddingTop: 1,
    paddingRight: 1,
    marginTop: 2,
    marginRight: 13,
    color:'gray'
  },
  subHeader: {
    fontSize: 16,
    marginHorizontal: 5,
    paddingBottom: 13,
    paddingLeft: 10,
    color: 'gray',
  },
});

export default index;
