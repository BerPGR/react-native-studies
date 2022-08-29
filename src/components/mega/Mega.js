import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import Style from '../style';

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    }

    alterarQtdNumero = (qtde) => {
        this.setState({ qtdNumeros: qtde })
    }

    render() {
        return (
            <>
                <Text style={Style.txtG}>
                    Gerador de Mega-Sena 
                    {this.state.qtdNumeros}
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder='Qtd de numeros'
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdNumero}/>
            </>
        )
    }
} 