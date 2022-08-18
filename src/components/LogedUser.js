import React from 'react'
import { View, Text } from 'react-native'
import Style from './style'
import If from './If'

export default props => {
    const user = props.user || {}
    return (
        <>
            <If test={user && user.name && user.email}>
                <Text>Loged User:</Text>
                <Text style={Style.txtG}>{user.name} - {user.email}</Text>
            </If>
        </>
    )
}