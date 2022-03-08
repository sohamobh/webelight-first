import React, {useState} from 'react'

// console.log(useState('Enter text here2'));

export default function TextForm(props) {

  const handleUpClick=()=>{
    console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
  } 
  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  } 

  const [text, setText] = useState('Enter text here'); //setText is the update function
  // text="new text"; //wrong way
  // setText("New text"); //correct way
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="my-3">
        {/* <label for="MyBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
