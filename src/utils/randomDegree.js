
  export function randonDegree(numberOfItems) {
    const randomNumber = Math.floor(Math.random() * numberOfItems)+1;
    const baseDegrees= Math.ceil(Math.random() * 4)*360
    const sliceAngle= 360/numberOfItems
    return baseDegrees+randomNumber*sliceAngle
  }
  