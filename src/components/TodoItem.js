import React from "react";

function TodoItem({onToggle, onRemove, todo}) {
  const {id, text, done} = todo;
  return (
    <li>
      <span
        onClick={() => onToggle(id)}
        style={{textDecoration: `${done ? "line-through" : "none"}`}}
      >
        {text}
      </span>
      <button type="button" onClick={() => onRemove(id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
