
import { useRef } from 'react'
import './App.css'
import Creeds from './pages/Creeds'
import Featured from './pages/Featured'
import FeaturedProducts from './pages/FeaturedProducts'
import Header from './pages/Header'
import NavBar from './pages/NavBar'
import Operations from './pages/Operations'


function App() {
const heroRef = useRef(null)

  return (
    <>
     <NavBar heroRef={heroRef}/>
     <Header/>
     <Featured heroRef={heroRef}/>
     <FeaturedProducts/>
     <Creeds/>
     <Operations/>
    </>
  )
}

export default App
