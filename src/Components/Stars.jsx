import React from "react";
import { useState } from "react";
const Star = ()=>{
     const [Color, SetColor] = useState(true);

  return(
      <i className="fa-solid fa-star" onClick={()=>  SetColor(v=>!v)} style={{color: Color ? "silver" : "gold" }}></i>

  )
}
export default function Stars() {

  return (
    <>
    <h3 style={{ margin: 0,fontSize: "15px" }}>
    
        <Star/>
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </h3>
    </>
  );
}
