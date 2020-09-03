import React from 'react';
// import { View, AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
// @react-native-community/async-storage

const tokenKey = 'AUTH_TOKEN'


// AsynStorage 함수 
// 1. setItem
// 2. getItem
// 3. removeItem


async function save(token) {
  try {
    await AsyncStorage.setItem(tokenKey, token);
  }
  catch (err) {
    console.error(err);
  }
}

async function get() {
  try {
    return await AsyncStorage.getItem(tokenKey);
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function remove() {
  try {
    return await AsyncStorage.removeItem(tokenKey);
  } catch (err) {
    console.error(err);
    return null;
  }
}
export default { save, get, remove }