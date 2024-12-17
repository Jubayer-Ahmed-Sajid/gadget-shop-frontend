import React from "react";
import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <GridLoader color="#FF0000" loading={true} cssOverride={""} />
    </div>
  );
};

export default Loading;
