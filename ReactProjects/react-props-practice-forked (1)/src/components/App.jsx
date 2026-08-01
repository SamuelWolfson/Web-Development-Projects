import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import { BeyonceInfo, JackInfo, ChuckInfo } from "../contacts";

function App() {
  return (
    <div>
      <Heading />
      <Card
        name={BeyonceInfo.name}
        phone={BeyonceInfo.phone}
        img={BeyonceInfo.imgURL}
        email={BeyonceInfo.email}
      />
      <Card
        name={ChuckInfo.name}
        phone={ChuckInfo.phone}
        img={ChuckInfo.imgURL}
        email={ChuckInfo.email}
      />
      <Card
        name={JackInfo.name}
        phone={JackInfo.phone}
        img={JackInfo.imgURL}
        email={JackInfo.email}
      />
    </div>
  );
}

export default App;
