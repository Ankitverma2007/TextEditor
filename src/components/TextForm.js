import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success")
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")

  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCapitalizeClick = () => {
    let words = text.split(" ");
    let newText = [];
    words.forEach((element) => {
      newText.push(
        element.charAt(0).toUpperCase() + element.slice(1, element.length)
      );
    });
    setText(newText.join(" "));
    props.showAlert("First Letter Capitalized of Each Word!","success")
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied!","success")

  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Removed!","success")

  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // setInterval(() => {
  //   props.toggleMode();
  // }, 1);
  return (
    <>
      <div className="container">
        <label
          htmlFor="myBox"
          className={`form-label ${props.mode === "dark" && "text-light"}`}
        >
          {props.heading}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="10"
        ></textarea>
        {/* upper case */}
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary mx-1 my-3"
          disabled={text.length === 0}
        >
          Upper Case
        </button>
        {/* lower case */}
        <button
          type="button"
          onClick={handleDownClick}
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
        >
          Lower Case
        </button>
        {/* clear text */}
        <button
          type="button"
          onClick={handleClearClick}
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
        >
          Clear Text{" "}
        </button>
        {/* capitalize */}
        <button
          type="button"
          onClick={handleCapitalizeClick}
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
        >
          {" "}
          Capitalize{" "}
        </button>
        {/* copy text  */}
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
        >
          {" "}
          Copy Text{" "}
        </button>
        {/* remove extra space */}
        <button
          type="button"
          onClick={handleExtraSpace}
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
        >
          Remove Extra Space
        </button>
      </div>

      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h4> Your Text Summary</h4>
        <h4>
          words - {text.split(/\s+/).filter((elem)=>{return elem.length!==0 }).length} characters - {text.length}
        </h4>
        <p>{0.008 * text.split(" ").filter((elem)=>{return elem.length!==0 }).length} minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter Something to preview"}</p>
      </div>
    </>
  );
}
