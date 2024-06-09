import '../index.css';

const HomeSectionWrapper = ({ children, title, subTitle, }:{children:any, title:string, subTitle:string}) => {
  return (
    <div className="wrapper">
      <div className='container-creeds'>
      {title && <h2 className="title" >{title}</h2>}
      {subTitle && <h3 className='subTitle'>{subTitle} </h3>}
      {children}
      </div>
    </div>
  );
};

export default HomeSectionWrapper;
