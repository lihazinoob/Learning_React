import logo from './logo.svg';
import './App.css';
import './Components/Clock';
import Clock from './Components/Clock';

function App() {
  console.log("App is rendered");
  return (
    <>
    <Clock locale = "bn-BD"></Clock>
    </>
  );
}

export default App;
