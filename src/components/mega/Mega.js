import React, { Component } from 'react';
import { Text } from 'react-native';
import Style from '../style';

export default class Mega extends Component {
    render() {
        return (
            <Text style={Style.txtG}>
                Gerador de Mega-Sena 
                {this.props.qtdNumeros}
            </Text>
        )
    }
} 