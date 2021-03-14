import React, { useState } from "react";

function App() {
  
var [init,changefn]=useState("")
var [initonclick,fnclick]=useState([])

  function changed(event)
  {
  changefn(event.target.value)
  }
  
  function clicked()
  {
fnclick(prevValue =>[...prevValue,init])
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={changed} />
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          { initonclick.map(todoitem=> <li>{todoitem} </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
