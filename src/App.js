import React, { useState } from 'react';
function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => {
    setCondition(!condition);
  }
  let renderCondition = condition ? 'True' : 'False'
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        {renderCondition}
      </div>
      <button onClick={toggle}>Toggle</button>
    </div>
    );
}

export default App;
