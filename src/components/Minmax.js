import React from "react";
import { Text } from 'react-native';
import Style from "./style";


export default props => <Text style={Style.txtG}>The value of {props.max} is higher than {props.min}</Text>