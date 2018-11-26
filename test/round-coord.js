const {roundCoordinates} = require('../src/round-coord.js');
const {expect} = require('chai');

const feature = {
  "type": "feature",
  "properties": {
    "id": 1,
    "name": "road name"
  },
  "geometry": {
    "type": "LineString",
    "coordinates":[]
  }
}

describe('round-ccord.js to round coordinates to given decimal digits', () => {
  it('Test when coordinates are LineString and rounded with some to upper and lower bound.', () => {
    const input = feature;
    input.geometry.coordinates = [[-0.1349098573, 51.5246098373], [-0.13596983326, 51.52333342]];
    const expected = [[-0.1349099, 51.5246098], [-0.1359698, 51.5233334]];
    const output = roundCoordinates(input);
    expect(output.geometry.coordinates).to.eql(expected);
  });

  it('Test when coordinates are LineString and rounded to 5 decimal digits.', () => {
    const input = feature;
    input.geometry.coordinates = [[-0.1349098573, 51.5246098373], [-0.13596983326, 51.52333342]];
    const expected = [[-0.13491, 51.52461], [-0.13597, 51.52333]];
    const output = roundCoordinates(input, 5);
    expect(output.geometry.coordinates).to.eql(expected);
  });

  it('Test when coordinates are LineString and short and not rounded.', () => {
    const input = feature;
    input.geometry.coordinates = [[-0.1349, 51.52], [-0.1355678, 51]];
    const expected = [[-0.1349, 51.52], [-0.1355678, 51]];
    const output = roundCoordinates(input);
    expect(output.geometry.coordinates).to.eql(expected);
  });

  it('Test when coordinates are LineString and empty array.', () => {
    const input = feature;
    input.geometry.coordinates = [];
    const expected = [];
    const output = roundCoordinates(input);
    expect(output.geometry.coordinates).to.eql(expected);
  });

  it('Test when coordinates are MultiLineString and rounded with some to upper and lower bound.', () => {
    const input = feature;
    input.geometry.type = "MultiLineString";
    input.geometry.coordinates = [[[-0.1349098573, 51.5246098373], [1, 2]], [-0.135, 51]];
    const expected = [[[-0.1349099, 51.5246098], [1, 2]], [-0.135, 51]];
    const output = roundCoordinates(input);
    expect(output.geometry.coordinates).to.eql(expected);
  });

  it('Test when coordinates are MultiLineString and rounded to 5 decimal digits.', () => {
    const input = feature;
    input.geometry.type = "MultiLineString";
    input.geometry.coordinates = [[[-0.1349098573, 51.5246098373], [1, 2]], [-0.135, 51]];
    const expected = [[[-0.13491, 51.52461], [1, 2]], [-0.135, 51]];
    const output = roundCoordinates(input, 5);
    expect(output.geometry.coordinates).to.eql(expected);
  });

  it('Test when coordinates are MultiLineString and empty array.', () => {
    const input = feature;
    input.geometry.type = "MultiLineString";
    input.geometry.coordinates = [];
    const expected = [];
    const output = roundCoordinates(input, 5);
    expect(output.geometry.coordinates).to.eql(expected);
  });
});
