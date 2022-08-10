import React from "react";
import { Text } from 'react-native';
import Style from "./style";

export default ({min, max}) => {
    const rand = Math.floor(Math.random() * (max - min) + min)
    return (
        <Text style={Style.txtG}>Random value: {rand}</Text>
    )
}