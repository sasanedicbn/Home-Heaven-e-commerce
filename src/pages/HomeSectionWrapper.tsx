import '../index.css';

const HomeSectionWrapper = ({ children}:{children:any}) => {
  return (
    <div className={`wrapper title subTitle`}>
     {children}
    </div>
  );
};

export default HomeSectionWrapper;
