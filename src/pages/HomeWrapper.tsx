import React from 'react';
import '../index.css';

const HomeWrapper = ({ children, paddingBottom = "10",marginTop = '10'  }) => {
  return (
    <div className="wrapper">
      {React.Children.map(children, (child) => (
        <div style={{ paddingBottom, marginTop }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default HomeWrapper;
