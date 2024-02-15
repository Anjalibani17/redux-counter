import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

import { VISIBILITY_FILTERS } from "./constant";

const TodoList = ({todos}) => {
    <ul className='todo-list'>
    {todos && todos.length ?
        todos.map((todo,index)=>{
            return<Todo  key={`${todo.id}`} todo={todo}/>
        })
        : "no todos"

    }
    </ul>
  
}

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
    };
//    export default TodoList;
 export default connect(mapStateToProps)(TodoList);