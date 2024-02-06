// drawPizza.js

export function drawPizza(ctx, rotation, priceArray) {
    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
    // Draw the base of the pizza
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, ctx.canvas.width / 2 - 2, 0, 2 * Math.PI);
    ctx.fillStyle = '#fcbf49'; // Pizza crust color
    ctx.fill();
    ctx.stroke();
  
    const sliceCount = priceArray.length;
  
    // Set the font size for the text
    ctx.font = 'bold 24px Arial'; // Change the font size and style as needed
  
    // Draw evenly cut slices
    for (let i = 0; i < sliceCount; i++) {
      const sliceAngle = (2 * Math.PI) / sliceCount;
      const startAngle = i * sliceAngle - Math.PI / sliceCount + rotation;
      const endAngle = (i + 1) * sliceAngle - Math.PI / sliceCount + rotation;
  
      // Calculate the middle angle of the slice
      const textAngle = (startAngle + endAngle) / 2;
  
      // Draw slice
      ctx.beginPath();
      ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
      ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, ctx.canvas.width / 2 - 2, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = '#ffffff' 
      ctx.fill();
      ctx.stroke();
  
      // Save the current state of the context before rotating
      ctx.save();
  
      // Rotate the context to align the text radially outward
      ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
      ctx.rotate(textAngle + Math.PI / 2); // Add Math.PI/2 to make text radially outward
      ctx.translate(-ctx.canvas.width / 2, -ctx.canvas.height / 2);
  
      // Add text radially outward
      const price = priceArray[i];
      const textX = ctx.canvas.width / 2 - ctx.measureText(price).width / 2; // Center the text horizontally
      const textY = ctx.canvas.height / 7; // Adjust the distance from the center vertically
  
      ctx.fillStyle = '#000'; 
      ctx.fillText(price, textX, textY);
  
      // Restore the context to its original state
      ctx.restore();
    }
  }
  