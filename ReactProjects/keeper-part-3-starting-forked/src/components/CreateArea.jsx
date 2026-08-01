import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const [placeHolders, setPlaceHolders] = useState({
    title: "Title",
    content: "Take a note...",
  });

  function inputChanged(event) {
    const { name, value } = event.target;

    setInput((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  }

  function onAdd(event) {
    props.addNote(input);
    setInput({
      title: "",
      content: "",
    });
    setPlaceHolders({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={inputChanged}
          value={input.title}
          name="title"
          placeholder={placeHolders.title}
        />
        <textarea
          onChange={inputChanged}
          value={input.content}
          name="content"
          placeholder={placeHolders.content}
          rows="3"
        />
        <button onClick={onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
