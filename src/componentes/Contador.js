import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default ({inicial, passo}) => {
    //let numero = props.inicial

    const [numero, setNumero] = useState(inicial)

    const inc = () => {
        setNumero(numero + passo)
    }

    const dec = () => {
        setNumero(numero - passo)
    }


    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title='+' onPress={inc}/>
            <Button title='-' onPress={dec}/>
        </>
    )
}