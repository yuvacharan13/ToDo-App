import React from "react";


const TodoList = (props) => {
    return (
        <ul className="list-group">
          {props.tasks.map((item) => {
            return (
              <li className="list-group-item" key={item.id}>
                <span>
                  <span>{item.title}</span>
                  <span
                    className="float-right"
                    onClick={props.deleteTodo.bind(this, item.id)}
                    // onClick={props.deleteTodo = () => {item.id}}
                  >
                    Delete
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      );
}


// class TodoList extends React.Component {
//   render = () => {
    
//   };
// }

export default TodoList;