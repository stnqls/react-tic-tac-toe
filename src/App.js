import React,{useEffect, useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState(0);
  useEffect(()=> {
    console.log(count);
  },[count])

  useEffect(()=> {
    console.log('first rendering')
  },[])// 빈 배열을 넣어주면 한번만 실행된다.

  const increment = () => {
    setCount(count+1);
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setHello(hello +1 )}>Click1</button>
    </div>
    );
}

export default App;
