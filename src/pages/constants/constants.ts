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

const testimonialData = [
    {
        id:1,
        title:'Cant believe I have been missing on this!',
        description: 'The furniture I found on this e-commerce store was exactly what I was looking for. The pieces have truly transformed my home and brought my vision to life, adding a touch of sophistication and elegance to every corner.',
        img:,
        name:'Vinney Malesh',
        location:'Los Angeles, USA',
    },
    {
        id:2,
        title:'My space now finally feels complete.',
        description: 'The beautiful furniture pieces I purchased fit perfectly in my home and bring me so much joy every day. The quality and modern design exceeded my expectations, and the entire experience with your company was seamless.',
        img:,
        name:'Sophie Martin',
        location:'Los Angeles, USA',
    },
    {
        id:3,
        title:'These pieces transformed my home!',
        description: 'The level of hospitality and professionalism shown by the company made my shopping experience a breeze. The modern designs and top-quality materials of these products exceeded my expectations, and I couldnt be happier with my purchase!',
        img:,
        name:'Anastasiya Petrova',
        location:'Kyiev, Ukraine',
    },
    {
        id:4,
        title:'You guys brought vision back to my life.',
        description: 'I cannot speak highly enough of the quality of the products I received from this company. The attention to detail and craftsmanship is unparalleled. I am so grateful to have found such a reliable and professional source for my furniture needs.',
        img:,
        name:'Tyron Mayers',
        location:'San Francisco, USA',
    }
]
export default operationsData;
