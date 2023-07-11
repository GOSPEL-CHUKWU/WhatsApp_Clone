import { View, Text } from 'react-native';
import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { BASE_URL } from './config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  //   const [user, setUser] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [currentUserNumber, setCurrentUserNumber] = useState();
  const [currentUserName, setCurrentUserName] = useState();

  const login = async incomingData => {
    try {
      //   console.log(incomingData);
      const { data } = await axios.post(`${BASE_URL}/api/v1/login`, {
        ...incomingData,
      });
      setIsLoading(true);

      setUserToken(data.token);
      AsyncStorage.setItem('userToken', data.token);
      AsyncStorage.setItem('userID', data.user._id);
      AsyncStorage.setItem('phoneNumber', data.user.phoneNumber);
      AsyncStorage.setItem('name', data.user.name);
      setCurrentUser(data.user._id);
      setCurrentUserNumber(data.user.phoneNumber);
      setCurrentUserName(data.user.name);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      //   console.log(error.response.data);
      throw error.response.data;
    }
  };
  const logout = async () => {
    try {
      setIsLoading(true);
      setUserToken(null);
      AsyncStorage.removeItem('userToken');
      AsyncStorage.removeItem('userID');
      AsyncStorage.removeItem('phoneNumber');
      AsyncStorage.removeItem('name');
      setIsLoading(false);
    } catch (error) {
      throw error;
    }
  };
  const register = async incomingData => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/v1/register`, {
        ...incomingData,
      });
      setIsLoading(true);

      console.warn(data);
      setUserToken(data.token);
      AsyncStorage.setItem('userToken', data.token);
      AsyncStorage.setItem('userID', data.user._id);
      AsyncStorage.setItem('phoneNumber', data.user.phoneNumber);
      AsyncStorage.setItem('name', data.user.name);
      setCurrentUser(data.user._id);
      setCurrentUserNumber(data.user.phoneNumber);
      setCurrentUserName(data.user.name);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      //   console.log(error.response.data);
      throw error.response.data;
    }
  };

  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        setIsLoading(true);
        let userToken = await AsyncStorage.getItem('userToken');
        let userID = await AsyncStorage.getItem('userID');


        setCurrentUser(userID);
        setUserToken(userToken);
        setCurrentUserNumber(userNumber);
        setCurrentUserName(userName);
        setIsLoading(false);
      } catch (err) {
        console.warn(err);
        setIsLoading(false);
      }
    };

    isLoggedIn();
  }, [setIsLoading, setUserToken, AsyncStorage]);
  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        isLoading,
        userToken,
        // user,
        currentUser,
        currentUserNumber,
        currentUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
