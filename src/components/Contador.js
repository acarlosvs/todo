import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from "react-native";

export default class Contador extends Component {
    state = {
        numero : this.props.numero
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    zerar = () => {
        this.setState({numero: 0})
    }

    render() {
        return (
            <View>
                <Text>{this.state.numero}</Text>
                <TouchableHighlight onPress={this.maisUm} onLongPress={this.zerar}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}