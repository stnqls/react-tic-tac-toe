import React,{useState} from 'react';

function App() {
  const [text, setText] = useState('Hello!');
  // let text = "Hello!!";

  const updateText = ()=> {
    // text = "Bye~";
    setText('Bye~');
  }
  return (
    <div className="App">
      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
    );
}

export default App;
