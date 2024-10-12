import logo from './logo.svg';
import './App.css';
import './Components/Clock';
import Clock from './Components/Clock';
import Form from './Components/Form';

function App() {
  console.log("App is rendered");
  return (
    <>
    {/* <Clock locale = "bn-BD"></Clock> */}
    <Form></Form>
    </>
  );
}

export default App;
