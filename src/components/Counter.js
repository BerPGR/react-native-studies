import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Style from './style'

export default ({initial, pass}) => {
    //let numero = props.initial

    const [number, setNumero] = useState(initial)

    const inc = () => {
        setNumero(number + pass)
    }

    const dec = () => {
        setNumero(number - paso)
    }


    return (
        <>
            <Text style={Style.txtG}>{number}</Text>
            <Button title='+' onPress={inc}/>
            <Button title='-' onPress={dec}/>
        </>
    )
}