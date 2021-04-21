import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import Canvas from "./Canvas";
import { getCoordinates } from "../functions";

const TringleInput = () => {
  const [values, setValues] = useState({
    side1: 0,
    side2: 0,
    side3: 0,
  });
  const [type, setType] = useState("");
  const [isTooSmall, setIsTooSmall] = useState(false);

  const [coordinates, setCoordinates] = useState({
    coordinate1: [0, 0],
    coordinate2: [],
    coordinate3: [],
  });

  const updateValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputSubmit = () => {
    getCoordinates(values, setType, coordinates, setCoordinates, setIsTooSmall);
  };

  const sortedArray = [values.side1, values.side2, values.side3].sort(
    (a, b) => a - b
  );
  const smallestSize = Math.floor(sortedArray[2] - sortedArray[1]);

  return (
    <div>
      <Form>
        <h6>
          Enter lengths of 3 triangle sides in pixels. Numbers should be between
          20 and 500. The difference between two longer sides can`t be larger or
          equal to the size of the third size.
        </h6>
        <FormGroup>
          <Input
            type="number"
            name="side1"
            id="exampleEmail"
            placeholder="Side 1"
            onChange={updateValues}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="side2"
            id="exampleEmail"
            placeholder="Side 2"
            onChange={updateValues}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="number"
            name="side3"
            id="exampleEmail"
            placeholder="Side 3"
            onChange={updateValues}
          />
        </FormGroup>

        <Button onClick={handleInputSubmit}>Submit</Button>
      </Form>

      {values.side1 < 1 || values.side2 < 1 || values.side3 < 1 ? (
        <h3>Please enter all 3 sides </h3>
      ) : isTooSmall ? (
        <h3>The smallest side should be larger than {smallestSize} </h3>
      ) : (
        <Canvas coordinates={coordinates} type={type} />
      )}
    </div>
  );
};

export default TringleInput;
