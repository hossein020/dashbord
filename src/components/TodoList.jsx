import { useState } from "react"

export default function TodoList() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');

    const keyDownHandler = (e) => {
        if (e.key === 'Enter') saveHandler()
    };
    const saveHandler = () =>{
        
    }
    return (
        <div className="todo">
            <div>
                <input
                    type="text"
                    placeholder="enter your work pleas ..."
                    value={input}
                    onChange={(e) => setTodo(e.target.value)}
                    onKeyDown={keyDownHandler}
                />
                <button onClick={saveHandler}>ثبت</button>
            </div>
        </div>
    )
}