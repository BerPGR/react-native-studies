import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

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
//import Diferential from './components/Diferential';
//import EvenOdd from './components/EvenOdd';
import Father from './components/relation/Father';
import Son from './components/relation/Son';

export default () => (
    <SafeAreaView style={style.App}>
        <Father>
            <Son name="Bernardo" sobrenome="Matuchewski"/>
            <Son name="Guilherme" sobrenome="Matucheski"/>
        </Father>

        <Father>
            <Son name="Ana" sobrenome="Silva"/>
            <Son name="Julia" sobrenome="Silva"/>
        </Father>
        {/*<EvenOdd num={5}/>
        <Diferential />
        <CounterV2 />
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
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})