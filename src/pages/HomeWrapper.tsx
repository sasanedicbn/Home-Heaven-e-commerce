import React from 'react';
import '../index.css';

const HomeWrapper = ({ children, paddingTop = "16px" }) => {
  return (
    <div className="wrapper">
      {React.Children.map(children, (child) => (
        <div style={{ paddingTop }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default HomeWrapper;
