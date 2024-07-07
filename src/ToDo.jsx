import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function ToDoList(){

    let [toDo , setToDo] = useState([{task : "sample task" , id : uuidv4()}])

    let [newToDo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setToDo((prevToDo) => {
            return [...toDo , {task: newToDo , id : uuidv4() }]

    });
        setNewTodo("");
    };

    let updateTodo = (event) => {
        setNewTodo(event.target.value);
    }

    let DelTodo = (id) =>{
        setToDo((prevToDo) => toDo.filter((prevToDo) => prevToDo.id != id));
    };
    return(
        <div>
            <input 
            placeholder="add a task"
            value={newToDo}
            onChange={updateTodo}
            ></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <hr></hr>
            <br></br>
            <h4>Task To Do</h4>
            <ul>
                {
                toDo.map((todo) => (
                    <li key={todo.id}>
                        <span>
                            {todo.task}
                        </span>
                        <button onClick ={() => DelTodo(todo.id)}>Delete</button>
                    </li>
                ))}   
            </ul>

        </div>
    )
}