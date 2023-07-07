import React, { useState } from "react";

function App() {

const[inputText, setInputText] = useState("");
const [items, setItems] = useState([]);

function handleChange(event){
  const newValue = event.target.value;
  setInputText(newValue);
}

function addItem(){
  setItems((prevItems)=>{
  return[...prevItems, inputText];
  });
setInputText("");

}

  return (
    <div className="container1">
    <div className="container">
    <div className="heading">
     <h1>Make your List Here!</h1>
     </div>

    
    <div className="input1">
      
      <input onChange={handleChange} type="text" value={inputText}></input>
      
      <button onClick={addItem}>
        <span>Add</span>
      </button>
     
    </div>
    <div>
      <ul>
      {items.map(todoItem => <li>{todoItem}</li>)}
   
      </ul>
    </div>
    </div>
    </div>
    
  );
}

export default App;
