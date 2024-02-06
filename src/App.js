// src/App.js
import React, { useEffect, useState } from 'react';
import { drawPizza } from './utils/drawWheel';
import { spinPizzaAnimation, easeOut } from './utils/spin';
import './App.css';

const App = () => {
  const [rotation, setRotation] = useState(0);
  const [priceArray, setPriceArray] = useState([]);

  const spinDuration = 3000;

  const spinPizza = (degrees) => {
    setRotation(0);

    const canvas = document.getElementById('pizzaCanvas');
    const ctx = canvas.getContext('2d');

    spinPizzaAnimation(degrees, spinDuration, (rotation) => drawPizza(ctx,rotation, priceArray));
  };

  const handleInputChange = (index, newValue) => {
    // Create a new array with the updated value at the specified index
    const newArray = [...priceArray];
    newArray[index] = newValue;

    // Update the state with the new array
    setPriceArray(newArray);
  };

  const addItem = () => {
    // Use the setPriceArray function to update the state by adding a new item
    setPriceArray([...priceArray, '']);
  };

  const removeThisItem = (index) => {
    const newArray = [...priceArray.slice(0, index), ...priceArray.slice(index + 1)];
    setPriceArray(newArray);
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

      <div>
      <p>Array State Example:</p>
      <ul>
        {priceArray.map((item, index) => (
          <li key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
                  <button onClick={()=>removeThisItem(index)}>x</button>
          </li>
          
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>

    </div>
    </div>

    
  );
};

export default App;
