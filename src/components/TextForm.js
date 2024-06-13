import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUPClick = ()=> {
    console.log('click the button', text);
    let newText= text.toUpperCase();
    setText(newText);
  };
  const clicked = (event)=>{
console.log('button is clicked');
setText(event.target.value);
  };

  const lowerCase = ()=> {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };
  const clear =()=>{
    let clearText = '';
    setText(clearText);
  };
  const copyHandle=()=>{
    var text= document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
  }
  var extraSpace=()=>{
    var space = text.split(/[ ]+/);
    setText(space.join(" "));
  }
  const [text, setText] = useState('text is here');
  return (
    <>
    <div class="container" style={{color:props.mode==='dark'?'grey':'dark'}}> 
     
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="9" value={text} onChange={clicked}></textarea>
        </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUPClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={lowerCase}>Convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={clear}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={copyHandle}>Copy to clipboard</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={extraSpace}>Remove Extra space</button>
    </div>
    <div className="container" >
    <h1>Your text summary is:</h1>
    <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words {text.length} characters</p>
    <p>{0.008 * text.split(" ").length}</p >
    <h3>Preview of our text:</h3>
    <p>{text}</p>
    </div>
    </> )
}
