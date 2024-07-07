import React,{useState} from "react";


const Task1=()=>{
  const [title,settitle]=useState("h1")
return(
    <>
    <button>Click me</button>
    <h1 title={title}>My name is anything</h1>
    <h1>my name is kinshuk</h1>
    </>
)
}
export default Task1;