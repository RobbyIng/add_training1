// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main';
import { useState } from 'react';


function App() {
const [count, setCount] = useState(0)


  return (
    <div className="App">

      <Header count = {count}/>
      
      <Main setCount={setCount}/>

      <Footer/>

      
    </div>
  );
}

export default App;
