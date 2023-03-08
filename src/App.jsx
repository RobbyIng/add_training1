// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main';
import { useState } from 'react';


function App() {
const [count, setCount] = useState(0)
const [todos, setTodos] = useState([])


  return (
    <div className="App">

      <Header count = {count}/>
      
      <Main setCount={setCount} todos={todos}/>

      <Footer/>

      
    </div>
  );
}

export default App;
