import React from 'react'
import { Text } from 'react-native'

export default props => {
    return (
        <>
            <Text>Family members</Text>
            {props.children}
        </>
    )
}