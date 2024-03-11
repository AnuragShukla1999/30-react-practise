import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    function handleDelete(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder='Add todo...' />
            <button type='submit'>Add</button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li>
                    {todo}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo