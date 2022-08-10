import React from 'react'
import { Text, Platform  } from 'react-native'
import Style from './style'

export default _ => {
    if (Platform.OS === 'android') {
        return <Text style={Style.txtG}>Android</Text>
    }
    else if (Platform.OS === 'ios') {
        return <Text style={Style.txtG}>IOS</Text>
    }
    else {
        return <Text style={Style.txtG}>Ops</Text>
    }

}