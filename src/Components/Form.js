import React from "react";

class Form extends React.Component{
  render()
  {
    return(
    <>
    <div>
      <form>
        <input type = "text" placeholder="programming language"></input>
        <button>Submit</button>
      </form>
    </div>

    </>
    )
  }
}
export default Form;