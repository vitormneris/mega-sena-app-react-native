import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ 
    layout: {
      position: 'absolute',
      zIndex: 99,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    container: {
      position: 'absolute',
      zIndex: 100,
      height: '60%',
      width: '85%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      borderColor: '#000',
      borderWidth: 2,
    },

    title: {
      fontFamily: 'google-sans',
      fontSize: 30,
      fontWeight: '900',
      color: '#000',
    },

    text: {
      fontFamily: 'google-sans',
      fontSize: 18,
      fontWeight: '900',
      color: '#000',
    },
  });