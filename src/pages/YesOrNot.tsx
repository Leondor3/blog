import React, { useState } from "react";
import MovingButton from "../components/MovingButton";
import ChoiceMovie from "../components/ChoiceMovie";

const YesOrNot = () => {
  const [clickYes, setClickYes] = useState(false);

  const handleClickYes = () => {
    setClickYes(true);
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="h-full flex mt-40">
        <h1 className="text-white text-3xl text-center">
          Vamos no cinema essa semana?
        </h1>
      </div>
      <button
        onClick={handleClickYes}
        className="absolute top-1/2 -translate-y-1/2 bg-green-600 p-2 rounded-md font-bold"
      >
        SIM
      </button>
      {clickYes ? <ChoiceMovie /> : null}
      <MovingButton />
    </div>
  );
};

export default YesOrNot;
