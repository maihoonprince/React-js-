import React from "react";
import Todo from "./components/ToDo";
import Counter from "./components/ToDo/counter";

const myTodoItems = [
    {
        id:1,
        title: "I need to finish my HW"
    },
    {
        id:2,
        title: "I need to watch playlist"
    }
]

const App: React.FC = () => {
    return (
        <div>
            <Todo item = {myTodoItems} />
            <Counter />
        </div>
    );
};

export default App;