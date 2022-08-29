import React, { Component } from 'react';
import { Text, TextInput, Button } from 'react-native';
import Style from '../style';

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdNumero = (qtde) => {
        this.setState({ qtdNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    /*
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
        .fill()
        .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
        .sort((a, b) => a - b)
        this.setState({ numeros })
    }
    */

    gerarNumeros = () => {
        const { qtdNumeros } = this.state
        const numeros = []
        for (let i = 0; i < qtdNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros);
            numeros.push(n)
        }
        numeros.sort((a, b) => a - b)

        this.setState({ numeros })
    }

    render() {
        return (
            <>
                <Text style={Style.txtG}>
                    Gerador de Mega-Sena 
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder='Qtd de numeros'
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdNumero}
                />
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <Text>{this.state.numeros.join(', ')}</Text>
            </>
        )
    }
} 