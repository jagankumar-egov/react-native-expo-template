import AsyncStorage from '@react-native-async-storage/async-storage';



export const setData = async (key,data) => {
    try {
        console.log(key,data,"set debug data");

      await AsyncStorage.setItem(
        `DIGIT-${key}`,
        JSON.stringify(data),
      );
    } catch (error) {
      // Error saving data
    }
  };
export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem( `DIGIT-${key}`);
      console.log(value,"debug data");

      if (value !== null) {
        // We have data!!
        return JSON.parse(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };



