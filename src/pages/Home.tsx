
import { useRef } from 'react'
import Creeds from './Creeds'
import Featured from './Featured'
import FeaturedProducts from './FeaturedProducts'
import Header from './Header'
import Operations from './Operations'
import { NavBarProps } from '../types/types'
import { RefsProvider } from './Refs/RefsProvider'



const  Home: React.FC<NavBarProps> = ({heroRef}) => {


  return (
    <>
    {/* <RefsProvider> */}
      <Header heroRef={heroRef}/>
      <Featured />
      <FeaturedProducts/>
      <Creeds/>
      <Operations/>
     {/* </RefsProvider> */}
     </>
  )
}

export default Home;
