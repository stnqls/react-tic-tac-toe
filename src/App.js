import React from 'react';

function App() {

  const onSubmit = () => {
    alert('submitted');
  };
  const onKeyUp =(event) => {
    if (event.keyCode === 13) { //enter의 키 코드가 13이다.
      onSubmit();
    }
  };

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>Submit</button>
      <button onClick={()=> alert('hello')}>hello</button>

    </div>
    );
}

export default App;
