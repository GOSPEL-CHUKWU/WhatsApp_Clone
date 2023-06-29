import { View, Text, StyleSheet, TextInput } from 'react-native';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCamera,
  faFaceGrin,
  faMicrophone,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    if (newMessage === '') return;
    console.warn('sending a new message:', newMessage);
    setNewMessage('');
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.inputContainer}>
        {/* Icon */}
        <FontAwesomeIcon
          icon={faFaceGrin}
          color="#babfbd"
          size={20}
          style={styles.emojis}
        />

        {/* Text Input */}
        <TextInput
          placeholder="Message"
          placeholderTextColor="gray"
          value={newMessage}
          onChangeText={setNewMessage}
          style={styles.input}
        />

        <View style={styles.transferIcons}>
          {/* Icons */}
          <FontAwesomeIcon
            icon={faPaperclip}
            size={21}
            color="#babfbd"
            style={styles.transfers}
          />
          <FontAwesomeIcon
            icon={faCamera}
            size={21}
            color="#babfbd"
            style={styles.camera}
          />
        </View>
      </View>

      {/* Send */}
      {/* <FontAwesome name='microphone' size={22} color='white' style={styles.record}/> */}
      <MaterialIcons
        name="send"
        size={22}
        color="white"
        style={styles.send}
        onPress={onSend}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    gap: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 2,
    backgroundColor: '#15151c',
    borderRadius: 30,
  },
  emojis: {
    margin: 12,
    marginHorizontal: 14,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: 'white',
  },
  transferIcons: {
    flexDirection: 'row',
    gap: 25,
    paddingHorizontal: 16,
    paddingVertical: 11.5,
  },
  transfers: {
    transform: [{ rotate: '280deg' }],
  },
  camera: {},
  record: {
    backgroundColor: '#077049',
    paddingHorizontal: 17,
    paddingVertical: 12,
    borderRadius: 50,
  },
  send: {
    backgroundColor: '#077049',
    paddingVertical: 12,
    paddingHorizontal: 13,
    textAlign: 'center',
    borderRadius: 50,
  },
});

export default InputBox;
