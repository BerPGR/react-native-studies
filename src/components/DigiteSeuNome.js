import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import Style from './style'

export default props => {
    const [nome, setNome] = useState('Bernardo')
    return (
        <View>
            <Text style={Style.txtG}>{nome}</Text>
            <TextInput placeholder='Digita seu nome'
            value={null}
            onChangeText={nome => setNome(nome)} />
        </View>
    )
}