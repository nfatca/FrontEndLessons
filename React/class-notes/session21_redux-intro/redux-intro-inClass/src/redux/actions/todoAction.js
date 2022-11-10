import { ADD_TODO, CLEAR_TODO } from "../types/todoTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};
export const clearTodo = (payload) => {
  return { type: CLEAR_TODO };
};
