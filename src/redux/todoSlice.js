import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  todos: [],
  error: null
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodosLoading(state) {
      state.loading = true;
      state.todos = [];
      state.error = null;
    },
    getTodosSuccess(state, action) {
      state.loading = false;
      state.todos = action.payload.data;
      state.error = null;
    },
    getTodosFailure(state, action) {
      state.loading = false;
      state.todos = [];
      state.error = action.payload.error;
    }
  }
});

export const {
  getTodosLoading,
  getTodosFailure,
  getTodosSuccess
} = todoSlice.actions;

export const selectTodos = (state) => state?.todo?.todos;

export const selectTodoLoading = (state) => state?.todo?.loading;

export const selectTodoError = (state) => state.todo.error;

export default todoSlice.reducer;
