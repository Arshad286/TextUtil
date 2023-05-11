import React, {useState} from 'react'

export default function (props) {
    const [text, settext] = useState("");

    const handleclick = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to Uppercase", "success")
   
    }
    const handleclick2 =()=>{
      let newtext = text.toLowerCase();
      settext(newtext);
      props.showAlert("Converted to lowercase", "success")
    }

    const handleclick3 =()=>{
      let newtext = "";
      settext(newtext);
      props.showAlert("Screen cleared", "success")
    }
    const handleclick4 =()=>{
      let newtext = document.getElementById("MyBox");
      newtext.select();
      navigator.clipboard.writeText(newtext.value);
      props.showAlert("Copied", "success")
   
    }
    const handleOnchange = (event)=>{
        settext(event.target.value);
    }
  return (
    <div className='conatainer'>
   <h1> {props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnchange} id="MyBox" rows="8"></textarea>
</div>

  <button className='btn btn-primary' onClick={handleclick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleclick2}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleclick3}>Clear</button>
<button className='btn btn-primary mx-1' onClick={handleclick4}>Copy Text</button>

<div className='conatainer my-3'>
    <h1> Your text summary</h1>
    <p> {text.split(" ").length} word and {text.length} character</p>
    <p> {0.008*text.split(" ").length} Minutes read</p>
    <h2> Preview </h2>
    <p> {text.length >0?text:"Enter something to preview it here"} </p>
    </div>
   
    </div>
  )
}

