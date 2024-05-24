
import { useRef } from 'react'
import Creeds from './Creeds'
import Featured from './Featured'
import FeaturedProducts from './FeaturedProducts'
import Header from './Header'
import Operations from './Operations'
import { NavBarProps } from '../types/types'



const  Home: React.FC<NavBarProps> = ({heroRef}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

const handleLearnMoreClick = () => {
  if(targetRef.current){
  targetRef.current.scrollIntoView({
    behavior: 'smooth',
  })}
};

  return (
    <>
     <Header onLearnMoreClick={handleLearnMoreClick}/>
     <Featured heroRef={heroRef}/>
     <FeaturedProducts ref={targetRef}/>
     <Creeds/>
     <Operations/>
     </>
  )
}

export default Home;
