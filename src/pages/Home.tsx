
import { useRef } from 'react'
import Creeds from './Creeds'
import Featured from './Featured'
import FeaturedProducts from './FeaturedProducts'
import Header from './Header'
import Operations from './Operations'
import { NavBarProps } from '../types/types'
import HomeWrapper from './HomeWrapper'


const  Home: React.FC<NavBarProps> = ({heroRef}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

const handleLearnMoreClick = () => {
  if(targetRef.current){
  targetRef.current.scrollIntoView({
    behavior: 'smooth',
  })}
};

  return (
    <HomeWrapper marginTop='10rem'  >
     <Header onLearnMoreClick={handleLearnMoreClick}/>
     <Featured heroRef={heroRef}/>
     <FeaturedProducts ref={targetRef}/>
     <Creeds/>
     <Operations/>
    </HomeWrapper>
  )
}

export default Home;
