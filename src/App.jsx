// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
const [count, setCount] = useState(0)
const [todos, setTodos] = useState([])
const addToList = (value) => {
  const newTodo = {
    id: uuidv4(),
    title: value,
    status: false
  }
  setTodos((prev)=>[newTodo, ...prev])
  }
const deleteList = () => {
  setTodos([])
}
const deleteOneTodo = (id) => {

}


  return (
    <div className="App">

      <Header count = {count} addToList={addToList}/>
      
      <Main 
        setCount={setCount} 
        todos={todos} 
        deleteList = {deleteList}
      />

      <Footer />

      
    </div>
  );
}

export default App;
