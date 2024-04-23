import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TodoList from './components/TodoList/TodoList';
import Home from './components/Home/Home';
import ContactForm from './components/modals/ContactForm';




function App() {


  return (
    <>     
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/todo-list' element={<TodoList />}></Route>
            <Route path='/contact' element={<ContactForm />}></Route>
        </Routes> 
        </BrowserRouter>        
    </>
  );
}

export default App;






