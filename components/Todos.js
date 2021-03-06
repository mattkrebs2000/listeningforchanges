import React from "react";
import TodoItem from "./TodoItem";
import { TouchableOpacity} from 'react-native';

const Todos = ({ todos, markComplete, delTodo }) => {
  return todos.map((todo) => (
    
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={markComplete}
      delTodo={delTodo}
    />
  ));
};

export default Todos;
