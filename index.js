// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    const HQ = 42;
    return Math.abs((pickup)- HQ);

  }

  function distanceFromHqInFeet(pickup) {
    const distanceConverter = 264;
  return distanceFromHqInBlocks(pickup) * distanceConverter ;
  
}

 function distanceTravelledInFeet(start, destination) {
    const distanceConverter = 264;
    return Math.abs((start - destination)* distanceConverter);
  }

  function calculatesFarePrice(start, destination) {
    const distanceConverter = 264;
    const freeDistance = 400;
    const costPerFeet = 0.02;
    const distance = Math.abs(start - destination)* distanceConverter;

    if (distance <= freeDistance) {
        return 0;
    } else if (distance > freeDistance && distance <= 2000 ) {
        return (distance - freeDistance) * costPerFeet;
    }else if(distance > 2000 && distance <= 2500) {
        return 25;
    }else if (distance > 2500) {
        return 'cannot travel that far';
    }
  }

  
