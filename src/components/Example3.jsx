import React from "react";

// useState = count => {count : 0};

export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );
  function click() {
    // setState({ count: state.count + 1 });

    // 값을 함수를 통해 의존적으로 만들수도 있다.
    setState((state) => {
      // 함수에서 사용되는 state는 외부에서 인자로 들어오는 state와 달라서 state를 의존적이지 않게 사용할 수 있다.
      return {
        count: state.count + 1,
      };
    });
  }
}
