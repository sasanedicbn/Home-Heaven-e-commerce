
import { useRef } from 'react'
import Creeds from './Creeds'
import Featured from './Featured'
import FeaturedProducts from './FeaturedProducts'
import Header from './Header'
import NavBar from './NavBar'
import Operations from './Operations'


const  Home = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

const handleLearnMoreClick = () => {
  if(targetRef.current){
  targetRef.current.scrollIntoView({
    behavior: 'smooth',
  })}
};

  return (
    <>
     <NavBar heroRef={heroRef}/>
     <Header onLearnMoreClick={handleLearnMoreClick}/>
     <Featured heroRef={heroRef}/>
     <FeaturedProducts ref={targetRef}/>
     <Creeds/>
     <Operations/>
    </>
  )
}

export default Home;
