import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/todoTypes";

const initialState = {
  todoList: [
    {
      id: Math.ceil(Math.random() * 12550),
      text: "Work Hard",
      completed: true,
    },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          {
            id: Math.ceil(Math.random() * 12550),
            text: payload,
            completed: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        todoList: [...state.todoList.filter((item) => item.id !== payload)],
      };
    case TOGGLE_TODO:
      return {
        todoList: [
          ...state.todoList.map((item) => {
            if (item.id === payload) {
              return { ...item, completed: !item.completed };
            } else {
              return { ...item };
            }
          }),
        ],
      };
    case CLEAR_TODO:
      return initialState;

    default:
      return state;
  }
};
export default todoReducer;
