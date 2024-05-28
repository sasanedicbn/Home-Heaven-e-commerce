import { IconType } from 'react-icons';
import { FaWind, FaHeadset, FaLightbulb, FaUndo,  } from 'react-icons/fa';

type Operation = {
  id: number;
  button: string;
  icon: IconType; 
  title: string;
  description: string;
}

 const operationsData: Operation[] = [
    {
        id: 1,
        button: 'Swift Delivery',
        icon: FaWind,
        title: 'Get your home furnishings in a flash with rapid delivery.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, perspiciatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia.'
    },
    {
        id: 2,
        button: 'Stellar Support',
        icon: FaHeadset,
        title: 'Always here to help: stellar support around the clock.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, perspiciatis blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia.'
    },
    {
        id: 3,
        button: 'Fresh Find',
        icon: FaLightbulb,
        title: 'Stay ahead of the trends with our latest discoveries.',
        description: 'Ipsum dolor sit amet consectetur adipisicing elit. Error accusamus architecto minus sint, pLorem blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit. Explicabo, voluptatibus officia temporibus.'
    },
    {
        id: 4,
        button: 'Easy Returns',
        icon: FaUndo,
        title: 'No stress or worries for your home goods.',
        description: 'Explicabo ipsum Error sit ametperspiciati consectetur voluptatibus elit. Error accusamus arc explicabo explictecto minus sint, se blanditiis iusto dolor, temporibus aperiam explicabo est ex harum eligendi quia ipsa fugit sit amet architecto.'
    }
]; 
export default operationsData;