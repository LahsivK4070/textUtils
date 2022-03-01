import React, { useState } from 'react'

function TextForm(props) {

    let [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleUpClick() {
        setText(text.toUpperCase());
    }

    function handleLoClick() {
        setText(text.toLowerCase());
    }

    function handleCountClick() {
        let wordToCount = prompt("Enter the word you want to count");
        
        let wordArr = text.split(" ");
        let count = 0;
        
        wordArr.forEach(member => {
            if (member === wordToCount) {
                count++;
            }
        })

        alert("There are " + count + " occurences of the word " + wordToCount);
    }

    function handleCopyClick() {
        let data = document.getElementById("my-box");
        data.select();
        navigator.clipboard.writeText(data.value);
    }

    function handleRemoveClick() {
        let textArr = text.split(/[ ]+/);
        setText(textArr.join(" "));
    }

    let customStyle = { color : props.mode === "dark" ? "white" : "black" };
    
    return (
        <>
            <div style={customStyle}>
                <h1>{ props.heading }</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="my-box" style={{backgroundColor: props.mode === "dark" ? "#A9A9A9" : "white", color: props.mode === "dark" ? "white" : "black"}} onChange={handleChange} value={text} rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleLoClick}>Convert to Lower Case</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleCountClick}>Count Word Frequency</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={() => {setText("")}}>Clear Text</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleRemoveClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={customStyle}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((ele) => { return ele.length !== 0;}).length } words and {text.split(" ").filter((ele) => { return ele.length !== 0;}).join("").length} letters.</p>
                <p>{(0.008 * text.split(/\s+/).filter((ele) => { return ele.length !== 0;}).length)} minutes read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>
            </div>
        </>
    );
}

export default TextForm;