import React from "react";

class Button extends React.Component{

  shouldComponentUpdate(nextProps)
  {
    const {clickedprops : currentclickedprops} = this.props;
    const {clickedprops : nextclickedprops} = nextProps;
    if(currentclickedprops === nextclickedprops)
    {
      return false;
    }
    return true;
  }
  render()
  {
    console.log("button is rendered");
    // Destucturing of props
    const {clickedprops} = this.props;
    return (
      <button onClick={clickedprops}>CLICK HERE</button>
    )
  }
}
export default Button;