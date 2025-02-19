import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, FlatList, Alert} from 'react-native'
import usePedidoContext from '../Context/useContext'

const pantallaPedido = () => {
  const {platosEnPedido, eliminarPlato, limpiarPedido } = usePedidoContext()
  const [nombre, setNombre] = useState('')
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calcularTotal = () => {
      const total = platosEnPedido.reduce((acc, plato) => acc + plato.precio, 0)
      setTotal(total)
    }

    calcularTotal()
  }, [platosEnPedido])

  const confirmarPedido = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Ingrese su nombre.')
      return
    }
    Alert.alert('Pedido Confirmado', `Compra realizada\nNombre: ${nombre}\nTotal a pagar: L.${total}`)
    limpiarPedido()
  }

  return (
    <View>
      <Text>Confirmar Pedido</Text>
      <TextInput placeholder="Ingresa tu nombre" value={nombre} onChangeText={setNombre}/>
      <FlatList data={platosEnPedido} keyExtractor={(item) => item.id} renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
            <Text>L.{item.precio}</Text>
            <Button title="Eliminar" onPress={() => eliminarPlato(item.id)}/>
          </View>
        )}/>
      <Text>Total a pagar: L.{total}</Text>
      <Button title="Confirmar" onPress={confirmarPedido} disabled={platosEnPedido.length === 0}/>
    </View>
  )
}

export default pantallaPedido