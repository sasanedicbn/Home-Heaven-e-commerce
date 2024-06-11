export type NavBarProps = {
    heroRef: React.RefObject<HTMLDivElement>;
  };

export type  Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  shipping: boolean,
  category: string; 
  company: string; 
  [key: string]: any; 
}