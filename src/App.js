import logo from "./logo.svg";
import "./App.css";
import UncontrolledComponent from "./components/UncontrolledComponent";
import FileInput from "./components/FileInput";
// import Example1 from "./components/Example1";
// import Example2 from "./components/Example2";
// import Example3 from "./components/Example3";
import Example4 from "./components/Example4";
import Example5 from "./components/Example5";
import useWindowWidth from "./hooks/useWindowWidth";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";
import Example6 from "./components/Example6";
import Example7 from "./components/Example7";
import Example8 from "./components/Example8";
import A from "./components/componentC/A";
import Example1 from "./components/context/Example1";
import Example2 from "./components/context/Example2";
import Example3 from "./components/context/Example3";

function App({ hasMounted }) {
  const width = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();

  console.log(hasMounted, hasMountedFromHooks);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <UncontrolledComponent /> */}
        {/* <br />
        <FileInput />
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        {width}
        <Example6 />
        <br />
        <Example7 />
        <br />
        <Example8 /> */}
        {/* <A /> */}

        <Example1 />
        <Example2 />
        <Example3 />
      </header>
    </div>
  );
}

export default withHasMounted(App);
