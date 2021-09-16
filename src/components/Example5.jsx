import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount"); //랜더가 된 직후

    return () => {
      //cleanup
      // 디팬던시에 의해 실행이 될때 return이 실행되고 console.log를 실행한다.
      // componentWillUnmount
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      console.log("cleanup by count", count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
