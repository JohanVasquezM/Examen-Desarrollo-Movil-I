import React from 'react'
import { View, Text, FlatList} from 'react-native'
import usePedidoContext from '../Context/useContext'

const pantallaEliminar=() =>{
  const { eliminados } = usePedidoContext()
  return (
    <View>
      <Text>Platos Eliminados</Text>
      <FlatList
        data={eliminados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
            <Text>L.{item.precio}</Text>
          </View>
        )}/>
      <Text>Total de platos eliminados: {eliminados.length}</Text>
    </View>
  )
}

export default pantallaEliminar