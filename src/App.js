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
//import Father from './components/relation/Father';
//import Son from './components/relation/Son';
//import LogedUser from './components/LogedUser';
//import ListaProdutos from './components/produtos/ListaProdutos';
//import ListaProdutosv2 from './components/produtos/ListaProdutosv2';
//import DigiteSeuNome from './components/DigiteSeuNome';
//import Quadrado from './components/layout/Quadrado';
//import FlexBoxv1 from './components/layout/FlexBoxv1';
//import FlexBoxv2 from './components/layout/FlexBoxv2';
//import FlexBoxv3 from './components/layout/FlexBoxv3';
//import FlexBoxv4 from './components/layout/FlexBoxv4';
import Mega from './components/mega/Mega';

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdNumeros={12}/>
        {/*<FlexBoxv4 />
        <FlexBoxv2 />
        <FlexBoxv3 />
        <FlexBoxv1 />
        <DigiteSeuNome />
        <ListaProdutosv2 />
        <ListaProdutos />
        <LogedUser user={{name: 'Gui', email:'gui@gui.com'}}/>
        <Father>
            <Son name="Bernardo" sobrenome="Matuchewski"/>
            <Son name="Guilherme" sobrenome="Matucheski"/>
        </Father>

        <Father>
            <Son name="Ana" sobrenome="Silva"/>
            <Son name="Julia" sobrenome="Silva"/>
        </Father>
        <EvenOdd num={5}/>
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