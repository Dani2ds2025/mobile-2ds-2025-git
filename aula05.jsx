import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula05  extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.caixa1 }>1</View>
        <View style={ styles.caixa2 }>
            <Image 
            style={ styles.img1}
            source={{uri:'https://wallpapers.com/images/featured/lindas-fotos-da-natureza-oixs7q0he0hhoa6v.jpg' }}
            />
        </View>
        <View style={ styles.caixa3 }>
          <image
          
          />
        </View>
      </View>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'white',
  },
  caixa1: {
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20
  },
  caixa2: {
   flex: 1,
   backgroundColor: 'green',
   color: 'white',
   fontSize: 20,
   justifyContent: 'center',
   alignItems: 'center'
},
  caixa3: {

   backgroundColor: 'blue',
   height: 100,
   alignItems: 'center',
   justifyContent: 'center',
   color: 'white',
   fontSize: 20
},

img1: {
  width: 50,
  height: 50,
},
})

