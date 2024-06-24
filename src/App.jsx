import { useEffect, useState } from 'react'
import './App.css'
import ContenedorTarea from './componentes/ContenedorTarea'


import ListaDTareas from './componentes/ListaDTareas'
import { getData } from './fetch'

function App() {
  const [listatareas, setListaTareas] = useState([])

  useEffect(()=>{
    const traeTareas = async()=>{
      const data = await getData()
      setListaTareas(data)
    }
    traeTareas()
  },[])

  return (
    <>
    <h1>Lista de Tareas</h1>
    <ListaDTareas/>
    <ContenedorTarea mostrarTareas={listatareas}/>
  
    </>
  )
}

export default App
