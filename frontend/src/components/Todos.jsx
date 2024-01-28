
// I could have used "props" but more modern concept "object destructuring" i.e., {todos} is used
//where todos = [ { title:"", description: ""}]
export function Todos({ todos }) {
    return (
    <div>
        {todos.map(function(todo) {
         <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
    )
}
