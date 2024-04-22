import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TodoList from './components/TodoList/TodoList';
import Home from './components/Home/Home';
import ContactForm from './components/modals/ContactForm';




function App() {
  // const [count, setCount] = useState(0);
  // const audioRef = useRef(null); // useRef hook to store audio element

  // function countUp() {
  //   setCount(prevCount => prevCount + 1);
  // }

  // function countDown() {
  //   setCount(prevCount => prevCount - 1);
  // }

  // function reset() {
  //   setCount(0);
  //   audioRef.current.play();
  // }

  // const playAudio = () => {
  //   audioRef.current.play(); // Play the audio when h1 is clicked
  // };

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 onClick={playAudio}>FUHGETABOUDIT</h1>

      <div className="card">
        <div className="countMainDash">
          <button className="button count" onClick={countDown}>-</button>
          <span>  {count}  </span>
          <button className="button count" onClick={countUp}>+</button>
        </div>

        <div>
          <br /><br />
          <button className="button reset" onClick={reset}>RESET</button>
        </div>
      </div>

      {/* Ensure the audio file path is correct */}

      {/* <TodoList /> */}
      {/* <Home /> */}
      
      <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/todo-list' element={<TodoList />}></Route>
            <Route path='/contact' element={<ContactForm />}></Route>
        </Routes> 
        </BrowserRouter> 
      {/* <ContactForm /> */}


      {/*<audio ref={audioRef} src="./src/assets/audio/forget-about-it-made-with-Voicemod.mp3" preload="auto" /> */}
    </>
  );
}

export default App;






