import React from "react";
import "../style.css";
import Star from "./Stars"
export default function Card(props) {
  return (
    <div className="container">
      <div
        style={{
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
          <h3 style={{ margin: 0, color: "gold", margin: 0, fontSize: "15px" }}>
            <Star />
          </h3>
        </div>

        <p style={{ margin: 0 }}>{props.desc}</p>
        <h2 style={{ margin: 0, color: "blue" }}>$ {props.price} night</h2>
      </div>
    </div>
  );
}
