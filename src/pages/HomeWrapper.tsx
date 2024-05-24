import '../index.css';

const HomeWrapper = ({ children, className= '' }:{children:any}) => {
  return (
    <div className={`wrapper ${className}`}>
     {children}
    </div>
  );
};

export default HomeWrapper;
