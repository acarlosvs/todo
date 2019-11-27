import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Antonio', nota: 10 },
    { id: 2, nome: 'Chris', nota: 9  },
    { id: 3, nome: 'Ronney', nota: 8  }
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222'
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()}></FlatList>
        </ScrollView>
    )
}