import React from 'react'
import { useDispatch } from 'react-redux'
import { getTodos, removeTodo } from '../features/todo/todoslice'

const ListItem = ({todo}) => {

  const dispatch = useDispatch();

  const handleDelete = async(_id) => {
    await dispatch(removeTodo(_id));
    dispatch(getTodos());
  };

   const handleEdit =  (todo) => {};
   
  return (
    
       <li className={"list-group-item rounded-0"}>
      <h1 className="display-5"> {todo?.title} </h1>
      <h1 className="display-6"> {todo?.description} </h1>
      <span className="float-end">
        <button
          className="btn btn-warning btn-sm mx-1 rounded-0"
          onClick={() => handleEdit(todo)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm mx-1 rounded-0"
          onClick={() => handleDelete(todo._id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
