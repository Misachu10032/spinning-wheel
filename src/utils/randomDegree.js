
  export function randonDegree(numberOfItems) {
    const randomnumber = Math.floor(Math.random() * numberOfItems);
    const baseDegrees= Math.ceil(Math.random() * 4)*360
    const sliceAngle= 360/numberOfItems
    return baseDegrees+randomnumber*sliceAngle
  }
  