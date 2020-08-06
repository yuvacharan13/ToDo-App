import React, { useState } from "react";


const TodoForm = (props) => {

    const [inputVal, SetInputVal] = useState("");

    const handleChange = (e) => {
          SetInputVal(e.target.value) 
      };
    
      const handleSubmit = () => {
        props.addTodo(inputVal);
          SetInputVal(""); 
      };

      return (
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={inputVal}
          ></input>
          <button
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      );
}

export default TodoForm;