import React, { useState } from 'react'
import Son from './Son'
import { Text } from 'react-native'
import Style from '../style'

export default props => {
    const [text, setText] = useState('')
    const [number, setNum] = useState(0)

    function showValue(number, text) {
        setNum(number)
        setTexto(text)
    }

    return (
        <>
            <Text style={Style.txtG}>{text}{number}</Text>
            <Son 
                min={1} 
                max={60} 
                funcao={showValue} 
            />
        </>
    )
}