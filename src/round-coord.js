//module to round coordinates to 7 decimal points

exports.roundCoordinates = (feature, digits = 7) => {
  coordinates = feature.geometry.coordinates;
  for(let i = 0; i < coordinates.length; i++) { //loop through coordinates of a link
    coordinates[i][0] = round(coordinates[i][0], digits); //round longitude of i point
    coordinates[i][1] = round(coordinates[i][1], digits); //round latitude of i point
  }
  feature.geometry.coordinates = coordinates;
  return feature; //return rounded coordinates
}

round = (n, d) => { //inner function that rounds numbers
  return Math.round( n * Math.pow(10, d) ) / Math.pow(10, d);  //round to d decimal points
}
