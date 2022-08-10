import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Style from '../style'
import Contadordisplay from './DisplayCounter'
import Botoes from './ButtonCounter';

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <View>
            <Text style={Style.txtG}>
                Counter V2
            </Text>
            <Contadordisplay num={num} />
            <Botoes inc={inc} dec={dec}/>
        </View>
    )
}