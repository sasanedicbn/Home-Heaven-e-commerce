
import Creeds from './Creeds'
import Featured from './Featured'
import FeaturedProducts from './FeaturedProducts'
import Header from './Header'
import Operations from './Operations'
import { NavBarProps } from '../types/types'



const  Home: React.FC<NavBarProps> = () => {


  return (
    <>
    {/* <RefsProvider> */}
      <Header/>
      <Featured />
      <FeaturedProducts/>
      <Creeds/>
      <Operations/>
     {/* </RefsProvider> */}
     </>
  )
}

export default Home;
