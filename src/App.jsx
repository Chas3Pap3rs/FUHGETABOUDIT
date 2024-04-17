import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const audioRef = useRef(null); // useRef hook to store audio element

  function countUp() {
    setCount(prevCount => prevCount + 1);
  }

  function countDown() {
    setCount(prevCount => prevCount - 1);
  }

  function reset() {
    setCount(0);
    audioRef.current.play();
  }

  const playAudio = () => {
    audioRef.current.play(); // Play the audio when h1 is clicked
  };

  return (
    <>
      <div>
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
          <button onClick={countDown}>-</button>
          <span>  {count}  </span>
          <button onClick={countUp}>+</button>
        </div>

        <div>
          <br /><br />
          <button onClick={reset}>RESET</button>
        </div>
      </div>

      {/* Ensure the audio file path is correct */}
      <audio ref={audioRef} src="./src/assets/audio/forget-about-it-made-with-Voicemod.mp3" preload="auto" />
    </>
  );
}

export default App;












// import { useState, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let [count, setCount] = useState(0)
//   function countUp () {
//     // setCount(count + 1)

//     // setCount(prevCount => prevCount +1)
//     setCount(prevCount => prevCount +1)
//   }

//   function countDown () {
//     // setCount(count - 1)
//     setCount(prevCount => prevCount -1)
//   }

//   function reset () {
//     setCount(count = 0)
//   }

//   const playAudio = () => {
//     audioRef.current.play(); // Play the audio when h1 is clicked
//   };

//   return (
//     <>

//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>

//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <h1 onClick={playAudio}>FUHGETABOUDIT</h1>

//       <div className="card">
//         <div className="countMainDash">
//           <button onClick={countDown}>-</button>
//           <span>  {count}  </span>
//           <button onClick={countUp}>+</button>
//         </div>

//         <div>
//             <br /><br />
//             <button onClick={{reset}-{playAudio}}>RESET</button>
//         </div>
//       </div>
      
//       <audio 
//         ref={audioRef} 
//         src="./assets/audio/forget-about-it-made-with-Voicemod.mp3" 
//         preload="auto" 
//       />

//     </>    
//   ); 
// }

// export default App
