import '../index.css';

const HomeWrapper = ({ children}:{children:any}) => {
  return (
    <div className={`wrapper title subTitle`}>
     {children}
    </div>
  );
};

export default HomeWrapper;
