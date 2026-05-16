import "./styles.css";
import { useState, useEffect } from "react";

const list = ["apple", "and", "gaurav", "age", "buffalo", "bete"];

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [listt, setListt] = useState([]);
  function handleClick() {
    const filterList = list.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setListt(filterList);
    setOpen((p) => !p);
  }
  function handleListClick(event) {
    const clickedIndex = event.target.dataset.id;
    setText(listt[clickedIndex]);
    if (clickedIndex) {
      setOpen(false);
    }
  }
  useEffect(() => {
    function handleClose(event) {
      if (!open) return;
      console.log(event.target.classList, event.target.className, "event");
      if (!event.target.className.includes("list")) setOpen(false);
    }
    document.addEventListener("mousedown", handleClose);
    return () => document.removeEventListener("mousedown", handleClose);
  }, [open]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className={"input"}>
        <input
          className={"inputt"}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={"button"} onClick={handleClick}>
          {"Search"}
        </button>
      </div>
      {open && (
        <div className={"list"} onClick={handleListClick}>
          {listt.map((item, index) => (
            <p key={index} data-id={index} className={"item"}>
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
