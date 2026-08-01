import React from "react";
import ReactDOM from "react-dom";
import Car from "./Components/Car";
import Cars from "./practice";

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <Car
        model={Cars[0].model}
        speed={Cars[0].speedStats.topSpeed}
        topColor={Cars[0].coloursByPopularity[0]}
      />
    </tr>
    <tr>
      <Car
        model={Cars[1].model}
        speed={Cars[1].speedStats.topSpeed}
        topColor={Cars[1].coloursByPopularity[0]}
      />
    </tr>
  </table>,
  document.getElementById("root")
);
