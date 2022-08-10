import React from 'react';
import { View, StyleSheet } from 'react-native';

//import Patter, { Comp1, Comp2 } from './componentes/Multi'
//import First from './componentes/First'
//import Minmax from './componentes/Minmax'
//import Random from './componentes/Rand'
//import Title from './componentes/Title'
//import Button from './componentes/Button'
//import Counter from './componentes/Counter';
//import Father from './componentes/direct/Father';
//import Father from './componentes/indirect/Father';
//import CounterV2 from './componentes/contador/CounterV2';
import Diferential from './components/Diferential';

export default () => (
    <View style={style.App}>
        <Diferential />
        {/*<CounterV2 />
        <Father />
        <Father />
        <Counter inicial={100} passo={2} />
        <Button />
        <Title principal="Sign up" 
        secundary="Hey!!!" />
        <Random min={1} max={100} />
        <Random min={1} max={100} />
        <Random min={1} max={100} />
        <Random min={1} max={100} />
        <Minmax min={3} max={20}/>
        <Patter />
        <Comp1 />
        <Comp2 />
        <First />*/}
    </View>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})