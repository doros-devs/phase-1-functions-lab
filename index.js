// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    const HQ = 42;
    return Math.abs(pickup)- HQ;

  }

  function distanceFromHqInFeet(pickup) {
    const distanceConverter = 264
  return distanceFromHqInBlocks(pickup) * distanceConverter ;
  
}

 function distanceTravelledInFeet(start, destination) {
    const distanceConverter = 264
    return (start - destination)* distanceConverter
  }