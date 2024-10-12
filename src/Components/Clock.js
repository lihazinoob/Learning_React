import React from "react";
import Button from "./Button.js"

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      locale : props.locale
    };
  }
  componentDidMount() {
    this.intervalfunc = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  buttonclicked = (parameter) =>
  {
    // console.log("Button Clicked");
    this.setState(
      {
        locale : parameter
      }
    )
  }
  componentWillUnmount()
  {
    clearInterval(this.intervalfunc);
  }

  render() {
    // console.log("Clock is rendered");
    // We will use destructuring of state here
    const {date,locale} = this.state;
    const newlocale = locale === "bn-BD" ? "en-US" : "bn-BD";
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString(locale)}.</h2>

        {/* <button onClick = {this.buttonclicked}>Click HERE</button> */}
        <Button clickedprops = {() => {this.buttonclicked(newlocale)}}></Button>
        
      </div>
    );
  }
}
export default Clock;
