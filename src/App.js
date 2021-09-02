import React,{useState} from 'react';

function App() {
  const [username, setUsername] = useState(''); // [변수, 변수를 업데이트할 함수]
  const [password, setPassword] = useState('');
  const onSubmit = (event) => {
    event.preventDefault(); // form submit의 고유 특성을 무시하게 해준다.
    alert('submitted');
  }
  return (
      // form이 submit을 하게되면 브라우저는 refresh된다.
    <div className="App">
      <form onSubmit={onSubmit}> 
        <input
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} //e.target.value: input이 가지고있는 값
        /> 
        <br/>
        <input
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          /> 
        <br/>
        <button type='submit'>Login</button>
      </form>
    </div>
    );
}

export default App;
