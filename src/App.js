import AddTodo from './components/AddTodo';
import './App.css';
import './style.css'
import VisibilityFilters from './components/VisibilityFilters';
import TodoList from './components/TodoList';

function App() {
  return (
   <>
  <AddTodo/>
  <TodoList/>
  <VisibilityFilters/>
   </>
  );
}

export default App;
