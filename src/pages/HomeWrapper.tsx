import React from 'react';
import '../index.css';

const HomeWrapper = ({ children, marginTop = '5'  }:{children:any, marginTop: string}) => {
  return (
    <div className="wrapper">
      {React.Children.map(children, (child) => (
        <div style={{  marginTop }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default HomeWrapper;
