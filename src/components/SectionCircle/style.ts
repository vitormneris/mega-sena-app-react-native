import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    sectionCircle: {
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#00000055',
      borderRadius: 30,
      paddingVertical: 10,
      marginHorizontal: 10,
      marginBottom: 10,
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