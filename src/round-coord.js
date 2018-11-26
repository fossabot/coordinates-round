//module to round coordinates to 7 decimal points

//======== main function to round coordinates of given feature ===========
exports.roundCoordinates = (feature, digits = 7) => {
  let coordinates = []; //declare coordinates array as empty
  let geometry = feature.geometry; //
  if (geometry.type == 'Point') {
    geometry.coordinates[0] = round(geometry.coordinates[0], digits);
    geometry.coordinates[1] = round(geometry.coordinates[1], digits);
  } else if (geometry.type === 'LineString' || geometry.type === 'MultiPoint') {
    //check geometry type if LineString call loop fn once
     geometry.coordinates = loop(geometry.coordinates, digits);
  } else if (geometry.type === 'MultiLineString' || geometry.type === 'Polygon') {
    //if type MultiLineString call loop fn for each element
    geometry.coordinates.forEach( coordinate =>
      coordinates.push(loop(coordinate, digits))
    );
  } else if (geometry.type === 'MultiPolygon') {
    geometry.coordinates.forEach( array =>
      array.forEach( coordinate => {
        coordinates.push(loop(coordinate, digits))
      })
    );
  }
  return feature; //return rounded coordinates
}

//====== function to loop through coordinates and call round function  ========
loop = (coordinates, digits) => {
  for(let i = 0; i < coordinates.length; i++) { //loop through coordinates of a link
    coordinates[i][0] = round(coordinates[i][0], digits); //round longitude of i point
    coordinates[i][1] = round(coordinates[i][1], digits); //round latitude of i point
  }
  return coordinates; //return rounded coordinates
}

//================== function to round numbers  ======================
round = (n, d) => {
  return Math.round( n * Math.pow(10, d) ) / Math.pow(10, d);  //round to d decimal points
}
