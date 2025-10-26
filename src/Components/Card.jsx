import React from "react";
import "../style.css";
import Star from "./Stars";
export default function Card(props) {
  return (
    <div className="container">
      <div
        className="img"
        style={{
          borderRadius: "1.2pc",
          backgroundImage: `url(${props.img})`,
          width: "100%",
          margin: 0,
          height: "200px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="content" style={{ width: "300px" }}>
        <div className="div-contet">
          <h2 style={{ margin: 0, fontSize: "20px" }}>{props.title}</h2>
          <Star />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            rowGap: "5px",
          }}
        >
          <p style={{ margin: 0, fontSize: "17px", letterSpacing: "0.7px" }}>
            {props.desc}
          </p>
          <h2 style={{ margin: 0, color: "blue" }}>$ {props.price} night</h2>
        </div>
      </div>
    </div>
  );
}
