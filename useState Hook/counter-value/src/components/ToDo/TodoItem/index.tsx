import React from "react";
import './style.css';

interface TodoItemProps {
    title: string;
}

const TodoItems: React.FC<TodoItemProps> = (props) => {
    return <li>{props.title}</li>;
};

export default TodoItems;
