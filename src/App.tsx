
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
const targetRef = useRef(null)

const handleLearnMoreClick = () => {
  targetRef.current.scrollIntoView({
    behavior: 'smooth'
  });
};

  return (
    <>
     <NavBar heroRef={heroRef}/>
     <Header onLearnMoreClick={handleLearnMoreClick}/>
     <Featured heroRef={heroRef}/>
     <FeaturedProducts targetRef={targetRef}/>
     <Creeds/>
     <Operations/>
    </>
  )
}

export default App
