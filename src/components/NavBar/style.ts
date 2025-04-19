import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    layout: {
      justifyContent: 'flex-end',
      width: '100%',
    },    

    container: {
      height: 60,
      backgroundColor: '#fff000',
      alignItems: 'center',
      justifyContent: 'center',
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      borderWidth: 2,
    },

    text: {
      fontFamily: 'google-sans',
      fontSize: 20,
      fontWeight: '900',
    },
  });