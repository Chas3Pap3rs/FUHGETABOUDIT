import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TodoList from './components/TodoList/TodoList';
import Home from './components/Home/Home';
import ContactForm from './components/modals/ContactForm';




function App() {


  return (
    <>

      {/* <TodoList /> */}
      {/* <Home /> */}
      {/* <ContactForm /> */}
      
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/todo-list' element={<TodoList />}></Route>
            <Route path='/contact' element={<ContactForm />}></Route>
        </Routes> 
        </BrowserRouter> 
        
      


      {/*<audio ref={audioRef} src="./src/assets/audio/forget-about-it-made-with-Voicemod.mp3" preload="auto" /> */}
    </>
  );
}

export default App;






