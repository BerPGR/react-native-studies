import React from 'react'
import { View, Text } from 'react-native'
import Style from '../style'

import produtos from './produtos'

export default props => {
    function obterLista() {
        return produtos.map(p => {
            return <Text key={p.id}>{p.id} - {p.nome} tem R$ {p.preco}</Text> 
        })
    }
    return (
        <>
            <Text style={Style.txtG}>Lista de Produtos</Text>
            {obterLista()}
        </>
    )
}