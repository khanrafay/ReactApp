import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [counter, setCounter] = useState(1)

  let [textFalse, setTextView] = useState("hidden")


  let [oldTypePassword, setNewTypeText] = useState("password")
  let [oldTypeText, setNewTypePassword] = useState("text")



  let [name, setName] = useState("Rafay")

  let [obj, setObj] = useState({ name: "", age: 0 })

  const updateObject = () => {
    const newObj = { ...obj};
    newObj.name = "lala";
    newObj.class = 10;
    console.log(newObj);
    setObj(newObj);
  }
  return (
    <div className="App">
      <input type={textFalse} value="hey" />
      <button onClick={() => { setTextView("text") }}>Show</button>

      {counter}
      {/* <button onClick={() => { setCounter(counter + 1) }}>Update</button>

      <input type='text' value={name} />
      <button onClick={() => { setName(name + " Khan") }}>Add Khan</button>

      <br /><br /><br />

      <input type={oldTypePassword} value="rafaykhan" />
      <button onClick={() => { setNewTypeText("text") }}>Show Password</button>
      <button onClick={() => { setNewTypePassword("password") }}>Hide Password</button> */}

      <br /><br /><br /> <br /><br /><br />
      {"Age " + obj.age + " - Name " + obj.name + " - Class " + obj.class}
      <button onClick={updateObject}>Update Object</button>

    </div>
  );
}

export default App;
