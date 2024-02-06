// src/App.js
import React, { useEffect, useState } from 'react';
import { drawPizza } from './utils/drawWheel';
import { spinPizzaAnimation, easeOut } from './utils/spin';
import './App.css';

const App = () => {
  const [rotation, setRotation] = useState(0);
  const priceArray=['a','b','c','d']
  const sliceCount = 8;
  const spinDuration = 3000;

  const spinPizza = (degrees) => {
    setRotation(0);

    const canvas = document.getElementById('pizzaCanvas');
    const ctx = canvas.getContext('2d');

    spinPizzaAnimation(degrees, spinDuration, (rotation) => drawPizza(ctx,rotation, priceArray));
  };
  useEffect(() => {
    const canvas = document.getElementById('pizzaCanvas');
    const ctx = canvas.getContext('2d');

    drawPizza(ctx, rotation, priceArray);
  }, [rotation, priceArray]);
  return (
    <div className="app">
      <canvas id="pizzaCanvas" width="500" height="500"></canvas>
      <button onClick={() => spinPizza(720)}>Spin 720°</button>
    </div>
  );
};

export default App;
