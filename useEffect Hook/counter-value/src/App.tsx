import React, { useState } from "react";
import Todo from "./components/ToDo";
import Counter from "./components/ToDo/counter";

const myTodoItems = [
    {
        id: 1,
        title: "I need to finish my HW"
    },
    {
        id: 2,
        title: "I need to watch playlist"
    }
]

const App: React.FC = () => {
    const [state, setState] = useState<boolean>(true);
    return (
        <div>
            <Todo item={myTodoItems} />
            <button onClick = {e => setState(!state)}>Toggle</button>
            {state ? <Counter />: ""}
        </div>
    );
};

export default App;