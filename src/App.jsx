import React from 'react'
import {data} from "./data"
import Card from "./Components/Card"
import "./style.css"
export default function App() {
  const DataShow = data.map(item=><Card img={item.img} desc={item.desc} price={item.price}  title={item.title}/>)
  return (
    <div className='Sub-container'>{DataShow}</div>
  )
}
