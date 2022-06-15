import React, { useRef } from 'react';
import { Carousel } from 'antd';

import './App.css';

const containerStyle = {
  margin: '20px auto',
  height: "80vh",
  width: "90%",
  backgroundColor: "#cdcdcd",
  position: "relative",
};

const contentStyle = {
  height: '100%',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
};


const App = () => {
  const ref = useRef();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const goNext = () => {
    if (ref.current) {
      ref.current.next();
    }
  };

  return (
    <div style={containerStyle} onClick={goNext}>
      <Carousel
        ref={ref}
        afterChange={onChange}
        dots={false}
        style={{ height: '100%', width: '100%' }}
      >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default App;