import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'
import Contadordisplay from './ContadorDisplay'
import Botoes from './ContadorBotoes';

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <View>
            <Text style={Estilo.txtG}>
                Contador V2
            </Text>
            <Contadordisplay num={num} />
            <Botoes inc={inc} dec={dec}/>
        </View>
    )
}