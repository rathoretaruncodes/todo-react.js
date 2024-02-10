import { useState } from 'react';
//you should never pass props from child to parent
//props should always go from parent to child
export function CreateTodo() {
    //optimal way is using react-query
    //and un-optimal way is this
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange = {function(e) {
            setTitle(e.target.value);
        }}></input>
        <br/>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description" onChange = {function(e) {
            setDescription(e.target.value);
        }}></input>
        <br/>

        <button style={{
            padding:10,
            margin:10
        }} onClick ={() => {
            //axios
            fetch("https://todo-react-js-74jd.onrender.com/todo", {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description 
                }),
                headers: {
                    "Content-type": 'application/json'
                }
            })
            .then(async function(res) {
                await res.json();
                alert("Todo added");
            })
        }}>Add a todo</button>
    </div>
    
}
