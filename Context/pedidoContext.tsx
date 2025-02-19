import React, { createContext, useState, ReactNode } from 'react'

interface Plato{
  id: string
  nombre: string
  precio: number
}

interface PedidocontextProps{
  platosEnPedido: Plato[]
  agregarPlato: (plato: Plato) => void
  eliminarPlato: (id: string) => void
  limpiarPedido: () => void
  eliminados: Plato[]
}

export const PedidoContext = createContext<PedidocontextProps | undefined>(undefined)

export const PedidoProvider = ({ children }: { children: ReactNode }) => {
  const [platosEnPedido, setPlatosEnPedido] = useState<Plato[]>([])
  const [eliminados, setEliminados] = useState<Plato[]>([])

  const agregarPlato = (plato: Plato) => {
    setPlatosEnPedido([...platosEnPedido, plato])
  }

  const eliminarPlato = (id: string) => {
    const platoEliminado = platosEnPedido.find(plato => plato.id === id)
    setPlatosEnPedido(platosEnPedido.filter(plato => plato.id !== id))
    if (platoEliminado) {
      setEliminados([...eliminados, platoEliminado])
    }
  }

  const limpiarPedido = () => {
    setPlatosEnPedido([])
  }

  return (
    <PedidoContext.Provider value={{platosEnPedido, agregarPlato, eliminarPlato, limpiarPedido, eliminados}}>{children}</PedidoContext.Provider>
  )
}