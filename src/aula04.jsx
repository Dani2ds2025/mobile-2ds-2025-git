import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Aula04 extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text >Aula04 - trabalhando com imagens!</Text>
                <Image 
                   style={ styles.img }
                   source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DpPCRI6M269o&psig=AOvVaw1n27pDy_xsmSNmLjCzBk-H&ust=1746883408743000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCx6Na-lo0DFQAAAAAdAAAAABAE'}}
                />
            </View>
        );
    }
}

export default Aula04;

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
    },

    
    })