import { useContext } from 'react'
import { PedidoContext } from '../Context/pedidoContext'

const usePedidoContext = () => {
  const context = useContext(PedidoContext)
  if (!context) {
    throw new Error('usePedidoContext debe ser usado dentro de un PedidoProvider')
  }
  return context
}

export default usePedidoContext