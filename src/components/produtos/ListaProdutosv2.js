import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Style from '../style'

import produtos from './produtos'

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text style={Style.smallText}>{p.id}) {p.nome} - R${p.preco}</Text>
    }

    return (
        <>
            <Text style={Style.txtG}>Lista de Produtos v2</Text>
            <FlatList 
            data={produtos} 
            keyExtractor={i => `${i.id}`}
            renderItem={produtoRender} />
        </>
    )
}