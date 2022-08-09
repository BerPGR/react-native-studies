import React from 'react';
import { View, StyleSheet } from 'react-native';

//import CompPadrao, { Comp1, Comp2 } from './componentes/Multi'
//import Primeiro from './componentes/Primeiro'
//import Minmax from './componentes/Minmax'
//import Random from './componentes/Aleatorio'
//import Titulo from './componentes/Titulo'
//import Botao from './componentes/Botao'
//import Contador from './componentes/Contador';
//import Pai from './componentes/direta/Pai';
//import Pai from './componentes/indireta/Pai';
import Contadorv2 from './componentes/contador/ContadorV2';

export default () => (
    <View style={style.App}>
        <Contadorv2 />
        {/*<Pai />
        <Pai />
        <Contador inicial={100} passo={2} />
        <Botao />
        <Titulo principal="Cadastro" 
        secundario="Cadastro produto" />
        <Random min={1} max={100} />
        <Random min={1} max={100} />
        <Random min={1} max={100} />
        <Random min={1} max={100} />
        <Minmax min={3} max={20}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
<Primeiro />*/}
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