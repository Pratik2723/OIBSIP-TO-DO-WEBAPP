import React, { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);}
    
  
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <fieldset className="style">
        <label>
         
          <input type="text" value={title} className="input" onChange={handleTitleChange} placeholder="Title"/>
        </label><br />
        <label>
          
          <textarea name="message" rows={"10"} cols={"30"} className="input" value={description} placeholder="Description" onChange={handleDescriptionChange} />
        </label><br />
        <button type="submit" className="submit">Save</button></fieldset>
      </form>
      <ul className="ul">
        <ol className="abc">
      <li className="title">Title</li>
            <li className="title">Description</li>
            <li className="title">Delete</li></ol>
        {todos.map((todo, index) => (
          <li key={index} className="app" >
            
           <h3 className="size">{todo.title}</h3>
            <p className="size">{todo.description}</p>
         
            <button onClick={() => handleDelete(index)} className="delete">Delete</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
