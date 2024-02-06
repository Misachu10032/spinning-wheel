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
  const sliceCount= priceArray.length
    // Draw evenly cut slices
    for (let i = 0; i < sliceCount; i++) {
      const sliceAngle = (2 * Math.PI) / sliceCount;
      const startAngle = i * sliceAngle - Math.PI / sliceCount + rotation;
      const endAngle = (i + 1) * sliceAngle - Math.PI / sliceCount + rotation;
  
      // Draw slice
      ctx.beginPath();
      ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
      ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, ctx.canvas.width / 2 - 2, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = i % 2 === 0 ? '#ff686b' : '#fcbf49'; // Alternate slice colors
      ctx.fill();
      ctx.stroke();
  
      // Add text on the slice
      const price =priceArray[i]
      const textX = ctx.canvas.width / 2 + Math.cos((startAngle + endAngle) / 2) * (ctx.canvas.width / 2 - 20);
      const textY = ctx.canvas.height / 2 + Math.sin((startAngle + endAngle) / 2) * (ctx.canvas.height / 2 - 20);
  
      ctx.fillStyle = '#fff';
      ctx.fillText(price, textX, textY);
    }
  }
  