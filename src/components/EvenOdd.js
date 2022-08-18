import React from 'react'
import { View, Text } from 'react-native'
import Style from './style'

export default ({num=0}) => {
    return (
        <View>
            <Text style={Style.txtG}>The result is</Text>
            {
                num % 2 === 0
                ?   <Text style={Style.txtG}>Even</Text>
                :   <Text style={Style.txtG}>Odd</Text>
            }
        </View>
    )
}