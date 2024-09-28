import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2024',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Restaurante',
    value: '95,80',
    date: '25/09/2024',
    type: 0 //despesas
  },
  {
    id: 3,
    label: 'Pix Cliente X',
    value: '800,00',
    date: '25/09/2024',
    type: 1 //receita / entradas
  },
  {
    id: 4,
    label: 'Salário',
    value: '1.800,00',
    date: '28/09/2024',
    type: 1 //receita / entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name = "Victor Soffi" />
      
      <Balance saldo = "9.250,90" gastos = "-527,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)} //converte id pra string porque o react solicita que id seja string mas na lista esta como int
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><Movements data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart:14,
    marginEnd:14,
  }
});