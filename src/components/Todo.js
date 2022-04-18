import React from "react";

export default function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        {/* If we were to use checked, as we would in regular HTML, React would log some warnings into our browser console relating to handling events on the checkbox, which we want to avoid. */}
        {/* To use boolean values (true and false) in JSX attributes, you must enclose them in curly braces. If you write defaultChecked="true", the value of defaultChecked will be "true" — a string literal. Remember — this is actually JavaScript, not HTML! */}
        <input id={props.id} type="checkbox" defaultChecked={props.completed} />
        {/* The htmlFor attribute corresponds to the for attribute used in HTML. We cannot use for as an attribute in JSX because for is a reserved word, so React uses htmlFor instead. */}
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}