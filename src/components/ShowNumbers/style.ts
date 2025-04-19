import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    sectionCircle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000055',
      borderRadius: 30,
      paddingVertical: 10,
      width: '90%',
      height: 50,
      marginBottom: 20,
    },

    circle: {
      borderWidth: 1,
      borderRadius: 30,
      height: 40,
      width: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 3,
    },

    title: {
      fontFamily: 'google-sans',
      fontSize: 20,
      fontWeight: '900',
      color: '#000',
    },
  });