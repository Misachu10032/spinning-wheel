// animationUtils.js

export function easeOut(t) {
    return 1 - Math.pow(1 - t, 2);
  }
  
  export function spinPizzaAnimation(degrees, spinDuration, drawPizza) {
    const startRotation = 0;
    const startTime = performance.now();
  
    function animate(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = elapsed / spinDuration;
  
      if (progress < 1) {
        const easedProgress = easeOut(progress);
        const rotation = easedProgress * degrees * (Math.PI / 180);
  
        drawPizza(rotation + startRotation);
        requestAnimationFrame(animate);
      } else {
        drawPizza(startRotation + degrees * (Math.PI / 180));
      }
    }
  
    requestAnimationFrame(animate);
  }
  