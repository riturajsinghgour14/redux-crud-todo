import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../features/todo/todoslice';

const ListGroup = () => {
    const {isLoading , isError , todos} = useSelector((state) => state.todo);
     
    const dispatch = useDispatch()

     useEffect (() => {
      dispatch(getTodos());
     },[]);


    if(isLoading){
        return(
           <h1 className="text-secondary display-5 text-center">Loading...</h1>
        );
    }

    if(isError){
        return(
           <h1 className="text-danger display-5 text-center">
            Something Went Wrong...</h1>
        );
    }

    if(todos.length === 0){
      return(
         <h1 className="text-secondary display-5 text-center">Not Todos Yet </h1>
      );
  }

   
  return (
      <ul className="list-group my-2">
        {
          todos.map((todo) =>(
            <ListItem key={todo._id} todo={todo}/>)
         )}
    </ul>
  );
};

export default ListGroup;
