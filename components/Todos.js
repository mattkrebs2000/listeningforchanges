import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import {Text, View, TouchableOpacity} from 'react-native';



const Todos = ({ todos, markComplete, delTodo }) => {
  
  return ( todos.map((todo) => (
    
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={markComplete}
      delTodo={delTodo}
    />
  ))
  

  )
};

export default Todos;
