import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {PedidoProvider} from './Context/pedidoContext'
import pantallaDeinicio from './pantalla/pantallaHome'
import pantallaPedidoshechos from './pantalla/pantallaPedido'
import pantallaPedidoBorrado from './pantalla/pantallaEliminar'

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <PedidoProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={pantallaDeinicio}/>
          <Tab.Screen name="Hacer Pedido" component={pantallaPedidoshechos}/>
          <Tab.Screen name="Pedidos eliminados" component={pantallaPedidoBorrado}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PedidoProvider>
  )
}