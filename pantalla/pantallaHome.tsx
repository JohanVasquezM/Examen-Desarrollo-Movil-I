import React from 'react'
import {View, Text, Button, FlatList} from 'react-native'
import usePedidoContext from '../Context/useContext'

const platos =[
  {id: '1', nombre: 'Desayuno Tipico', precio: 200},
  {id: '2', nombre: 'Hamburguesa', precio: 140},
  {id: '3', nombre: 'Sopa de Res', precio: 350},
  {id: '4', nombre: 'Sandwich', precio: 100},
  {id: '5', nombre: 'Ensalada', precio: 180}
]

const pantallaHome =() => {
  const {agregarPlato} = usePedidoContext()
  return (
    <View>
      <Text>Platos</Text>
      <FlatList
        data={platos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
            <Text>L.{item.precio}</Text>
            <Button title="Agregar" onPress={() => agregarPlato(item)}/>
          </View>
        )}/>
    </View>
  )
}

export default pantallaHome