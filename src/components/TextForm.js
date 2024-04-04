import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    // console.log("Uppaercase " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlwet("success", "Convert to UpperCase");
  };
  const handleloclick = () => {
    // console.log("lowercase " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlwet("success", "Convert to LowerCase");
  };
  const handleliclick = () => {
    // console.log("lowercase " + text);
    let newText = "";
    setText(newText);
    props.showAlwet("success", "Text Cleared!");
  };
  const handlecopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlwet("success", "Text has been Copy ");
  };
  const handelOnChange = (event) => {
    // console.log("change ");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText("new state"); change state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#1d3e55" }}
      >
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1  bt "
          onClick={handleUpclick}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 bt"
          onClick={handleloclick}
        >
          Convert To lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1  bt"
          onClick={handlecopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 bt"
          onClick={handleliclick}
        >
          Clear
        </button>
      </div>

      <div
        className="conatainer my-4"
        style={{ color: props.mode === "dark" ? "white" : "#1d3e55" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
