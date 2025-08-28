import React, { Component } from "react";
import { View, Text, Stylesheet } from "react-native";

class Aula05 extends Component {
    render() {
        return(
            <View style={Stylesheet.container}>
                <View style={Stylesheet.caixa1}>1</View>
                <View style={Stylesheet.caixa2}>2</View>
                <View style={Stylesheet.caixa3}>3</View>
            </View>
        );
    }
}

export default Aula05;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignitems: "center",
        justifycontent: "center"

        
    }
}

)