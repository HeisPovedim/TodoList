export const Todo=({todo,toggleTask})=>{

    return (
        <div  className="itemTodo">
            <div className={todo.completed ? "item-textstrike": "item-text"}
            onClick={()=>toggleTask(todo.id)}
            >
                {todo.text}
            </div>
        </div>
    )
}