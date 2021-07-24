import * as SecureStore from "expo-secure-store";

export const setItem = async (key, value) => {
  return await SecureStore.setItemAsync(key, value);
};

export const getItem = async (key) => {
  return await SecureStore.getItemAsync(key);
};
