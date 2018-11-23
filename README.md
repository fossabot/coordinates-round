# Round Coordinates

Script to round coordinates of input feature to the given digits.

```
roundCoordinates(feature, digits)
```

Takes a feature and rounds the coordinates of the feature to the specified digits.

| Argument | Type    | Description                                   |
|:---------|:--------|:----------------------------------------------|
| feature  | Feature | Feature to round its coordinates              |
| digits   | Integer | Optinal, number of digits after decimal point |

* Default value for `digits` is 7.

### Example

```
let feature = {
  "type": "feature",
  "properties": {
    "id": 1,
    "name": "test"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [[1.123456789, 2.764], [2.3344556677889, 9.256378]]
  }
};
let roundedCoordinatesFeature = roundCoordinates(feature, 5);
```

The coordinates of `roundedCoordinatesFeature` will be `[[1.12345, 2.764], [2.33445, 9.25637]]`
