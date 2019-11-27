import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from "react-navigation";
import Simples from './components/Simples'
import Contador from './components/Contador'
import Evento from './components/Evento'
import Lista from './components/ListaFlex'

export default createDrawerNavigator({
     Simples: {
         screen: () => <Simples texto="Show"></Simples>,
         navigationOption: {title: 'Simples'}
     },
     Contador: {
         screen: () => <Contador numero={7}></Contador>,
         navigationOptions: {title: 'Contador'}
     },
     Evento: {
        screen: () => <Evento></Evento>,
        navigationOptions: {title: 'Evento'}
    },
    Lista: {
        screen: () => <Lista></Lista>,
        navigationOption: {title: 'Lista'}
    }
}, {drawerWidth: 300})