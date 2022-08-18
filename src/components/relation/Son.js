import React from 'react'
import { View, Text } from 'react-native'
import Style from '../style'

export default props => {
    return (
        <Text style={Style.txtG}>
            {props.name} {props.sobrenome}
        </Text>
    )
}