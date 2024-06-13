import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('here is your text');
  return (
    <div>
      <h1>{props.heading} - {text}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox"rows="9" ></textarea>
        </div>
      <button className="btn btn-primary">Convert to Uppercase 123 
      </button>
      
    </div>
  )
}
