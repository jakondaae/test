import Header from "./Header";
import Scores from "./Scores";
import Transitions from "./Transitions";

import { useContext } from "react";
import Change from "../Context";

const Main = () => {
  const { Data } = useContext(Change);
  return (
    <div>
      {/* HEADER */}
      <Header title={Data.title} imageSrc={Data.img} />
      {/* SCORE BOARD */}
      <Scores title={Data.title} />
      {/* TRANSITIONS */}
      <Transitions title={Data.title} />
    </div>
  );
};

export default Main;
