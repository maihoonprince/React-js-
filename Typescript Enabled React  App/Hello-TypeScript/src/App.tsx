import React from "react";
import Todo from "./components/ToDo";

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
        </div>
    );
};

export default App;