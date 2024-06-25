import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos } from "./todoService";

const todoslice = createSlice({
  name: 'todo',
  initialState :{
    todos : [],
    isLoading: false,
    isSuccess: false,
    isError : false,
    edit:{
      todo: {},
      isEdit: false,
    },
  },
  reducers : { 
    edit: (state, action) => {
      return{
        ...state,
        edit : {
          todo: action.payload,
          isEdit: true,
        }
      }
    }
  },
  extraReducers : (builder) => {
    builder
    .addCase(getTodos.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })

    .addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.todos = action.payload;
    })

    .addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })

    .addCase(createTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })

    .addCase(createTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.todos = [action.payload, ...state.todos];
    })

    .addCase(createTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })

    .addCase(removeTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })

    .addCase(removeTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      
    })

    .addCase(removeTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  
  },
});
export const {edit} = todoslice.actions;
export default todoslice.reducer;

// get all todos

export const getTodos = createAsyncThunk("FETCH/TODOS", async()=>{
  try{
     return await fetchTodos();
  } catch (error) {
     console.log(error);
  }
});

export const createTodo = createAsyncThunk("ADD/TODOS", async(FormData) => {
  try{
    return await addTodo(FormData)
 } catch (error) {
    console.log(error);
 }
});

export const removeTodo = createAsyncThunk("ADD/TODO", async(_id) => {
  try{
    return await deleteTodo(_id);
 } catch (error) {
    console.log(error);
 }
});


