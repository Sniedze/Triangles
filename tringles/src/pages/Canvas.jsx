import React from "react";
import { Stage, Layer, Line } from "react-konva";

const Home = (props) => {
  const { coordinate1, coordinate2, coordinate3 } = props.coordinates;
  const { type } = props;
  let fillColor;
  if (type === "Isosceles") fillColor = "greenyellow";
  if (type === "Equilateral") fillColor = "midnightblue";
  if (type === "Scalene") fillColor = "crimson";

  return (
    <div className="App">
      <>
        <h3>Triangle Type: {type}</h3>
        <Stage width={500} height={500}>
          <Layer>
            <Line
              closed
              points={[
                coordinate1[0],
                coordinate1[1],
                coordinate2[0],
                coordinate2[1],
                coordinate3[0],
                coordinate3[1],
              ]}
              fill={fillColor}
            />
          </Layer>
        </Stage>
      </>
    </div>
  );
};

export default Home;
