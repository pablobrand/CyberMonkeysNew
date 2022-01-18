import { relative } from "path";
import React from "react";
import Container from "./Container";

const Slider = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className } = props;
  const [bgColor, setBgColor] = React.useState("top");
  return (
    <div>
      <div>
        <div
          style={{
            width: 90,
            maxWidth: 900,
            margin: "auto",
            overflow: "hidden",
            position: "relative",
          }}
        ></div>
        <div></div>
        <div></div>
        <div></div>
        <div
          className="bg-black bg-opacity-50"
          style={{
            position: "absolute",
            width: 100,
            height: 100,
            top: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
          }}
        >
          &#60;
        </div>{" "}
        //botones
        <div
          className="bg-black bg-opacity-50"
          style={{ position: "absolute", width: 40, height: 40 }}
        >
          &#62;
        </div>
      </div>
    </div>
  );
};

export default Slider;
