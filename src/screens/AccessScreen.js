import { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  Keyboard,
} from 'react-native';
import signIn from '../../assets/images/signIn.png';
import { AuthContext } from '../../utils/AuthContext';

const AccessScreen = () => {
  const [newMessage, setNewMessage] = useState({
    name: '',
    status: '',
    phoneNumber: '',
  });

  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [isRegisterError, setIsRegisterError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { login, register } = useContext(AuthContext);

  const loggingIn = async () => {
    try {
      if ((!newMessage.name, !newMessage.status, !newMessage.phoneNumber))
        return;

      await login({
        name: newMessage.name,
        phoneNumber: newMessage.phoneNumber,
      });
      setNewMessage({
        name: '',
        status: '',
        phoneNumber: '',
      });
      Keyboard.dismiss();
      setIsLoginError(false);
    } catch (error) {
      // console.warn(error);
      setIsLoginError(true);
      setErrorMsg(error);
      setNewMessage({
        name: '',
        status: '',
        phoneNumber: '',
      });
    }
  };

  const Registering = async () => {
    try {
      if ((!newMessage.name, !newMessage.status, !newMessage.phoneNumber))
        return;

      await register({
        name: newMessage.name,
        status: newMessage.status,
        phoneNumber: newMessage.phoneNumber,
      });
      setNewMessage({
        name: '',
        status: '',
        phoneNumber: '',
      });
      Keyboard.dismiss();
      setIsRegisterError(false);
    } catch (error) {
      // console.warn(error);
      setIsRegisterError(true);
      setErrorMsg(error);
      setNewMessage({
        name: '',
        status: '',
        phoneNumber: '',
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.imageWrap}>
          <Image source={signIn} style={styles.image} />
        </View>

        <Text style={styles.header}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>

        {isSignUp ? (
          isRegisterError ? (
            <Text style={styles.error}>{errorMsg}</Text>
          ) : (
            ''
          )
        ) : isLoginError ? (
          <Text style={styles.error}>{errorMsg}</Text>
        ) : (
          ''
        )}

        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              // name="name"
              placeholder="Name"
              placeholderTextColor="gray"
              value={newMessage.name}
              onChangeText={e => setNewMessage({ ...newMessage, name: e })}
              style={styles.input}
            />
          </View>

          {isSignUp ? (
            <View style={styles.inputContainer}>
              <TextInput
                // name="status"
                placeholder="Status"
                placeholderTextColor="gray"
                value={newMessage.status}
                onChangeText={e => setNewMessage({ ...newMessage, status: e })}
                style={styles.input}
              />
            </View>
          ) : (
            ''
          )}
          <View style={styles.inputContainer}>
            <TextInput
              // name="phoneNumber"
              placeholder="Phone Number"
              placeholderTextColor="gray"
              value={newMessage.phoneNumber}
              onChangeText={e =>
                setNewMessage({ ...newMessage, phoneNumber: e })
              }
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.downComponent}>
          <Button
            title={isSignUp ? 'Sign Up' : 'Sign In'}
            color="green"
            onPress={isSignUp ? Registering : loggingIn}
            disabled={
              (!newMessage.name, !newMessage.status, !newMessage.phoneNumber)
                ? true
                : false
            }
          />

          <Text style={styles.accessQuestion}>
            {isSignUp ? 'Already have an account?' : `Don't have an account?`}{' '}
            <Text
              style={styles.accessSwitch}
              onPress={() => {
                setIsSignUp(!isSignUp);
              }}
            >
              {isSignUp ? ' Sign in' : 'Sign up'}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#15151c',
  },
  wrap: {
    marginHorizontal: 20,
    marginVertical: 50,
  },
  imageWrap: {
    overflow: 'hidden',
    width: '100%',
    height: ' 47%',
    // backgroundColor: 'red',
  },
  image: {
    width: '56%',
    height: ' 100%',
    marginTop: 15,
    marginLeft: '23%',
    borderRadius: 25,
    marginRight: 10,
    transform: [{ rotate: '-10deg' }],
  },
  header: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    marginLeft: 3,
  },
  inputsContainer: {
    marginVertical: 30,
    gap: 30,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 3,
  },
  input: {
    // flex: 1,
    fontSize: 18,
    color: 'black',
    padding: 6,
    paddingHorizontal: 12,
  },
  downComponent: {
    gap: 20,
  },
  accessQuestion: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 15,
  },
  accessSwitch: {
    color: 'white',
    fontWeight: '500',
  },
});

export default AccessScreen;
