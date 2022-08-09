import React from "react";
import { Text } from 'react-native';
import Estilo from "./estilo";

export default ({min, max}) => {
    const rand = Math.floor(Math.random() * (max - min) + min)
    return (
        <Text style={Estilo.txtG}>Valor randomico: {rand}</Text>
    )
}