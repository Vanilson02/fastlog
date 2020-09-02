import {StyleSheet} from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    containerTop: {
      justifyContent: 'flex-start'
    },

    container2: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    buttonHome: {
      marginRight: '5%'
    },

    textPage: {
      backgroundColor: 'orange',
      padding: 20,
    },

    darkbg: {
      backgroundColor: "#e8e8e8"
    },

    login__msg:(text='none')=> ({
      fontWeight: "bold",
      fontSize: 22,
      color: "#f00",
      marginTop: 5,
      marginBottom: 15,
      display: text
    }),

    login__form: {
      width: "80%"
    },

    login__input: {
      backgroundColor: "#fff",
      fontSize: 19,
      padding: 7,
      marginBottom: 15,
      borderRadius: 10
    },

    login__logomarca: {
      marginBottom: 10
    },

    login__button: {
      padding: 12,
      backgroundColor: "#4888f4",
      alignSelf: "center",
      borderRadius: 10
    },

    login__buttonText: {
      fontWeight: "bold",
      fontSize: 22,
      color: "#fff"
    },

    area__tab: {
      backgroundColor: '#DC483C',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#3F3F41'
    },

    area__menu:{
      flexDirection: 'row',
      paddingTop: 40,
      paddingBottom: 10,
      width: '100%',
      backgroundColor:'#111',
      alignItems:'center',
      justifyContent:'center'
  },

  button__home2:{
      textAlign:'left'
  },

  area__title:{
      width: '80%',
      fontWeight:'bold',
      fontSize:20,
      color:'#fff',
      textAlign:'center'
  },

  button__logout:{
      textAlign:'right'
  }

  });
  export {css};