import React, { FC } from "react";

export const Loader: FC<{}> = () => {
  return (
    <div
      style={{ position: "absolute", top: "40%", left: "50%" }}
      className="loader"
    ></div>
  );
};

export const ButtonLoader: FC<{}> = () => {
  return (
    <div
      className="loader"
      style={{
        color: "white",
        fontSize: "7px",

        position: "relative",
        bottom: "18px",
      }}
    ></div>
  );
};
