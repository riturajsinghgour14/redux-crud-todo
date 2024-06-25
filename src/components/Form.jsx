import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../features/todo/todoslice';

const Form = () => {
  
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

   const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createTodo ({ title, description}));
    setTitle(" ");
    setDescription(" ");
   };
  
   useEffect(() => {});
  return (
    
      <form className="my-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter Title"
        className="form-control rounded-0 my-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
       
      />
      <textarea
        className="form-control rounded-0 my-3"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button className="btn btn-success rounded-0 w-100">Save</button>
    </form>
   
  );
};

export default Form;
