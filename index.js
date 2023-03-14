// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  //returns the number of blocks given a value
  if (pickupLocation >= 42){
    return pickupLocation - 42;
  } else{
    return 42 - pickupLocation;
  }
}

function distanceFromHqInFeet(pickupLocation) {
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  let distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  let distanceInFeet = distanceInBlocks * 264;
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
    let distanceInBlocks = Math.abs(start - destination);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}