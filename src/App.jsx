import React, {Component} from "react";
import Welcome from './components/Welcome';
import Support from "./components/Support";

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
      <>
        <img src="public/images/group.svg" alt="StarGazers Group"/>
        {/* <h1>Meet the <i style={{color: "slateblue"}}>{name}</i></h1> */}
        <Welcome name="StarGazers"/>
        <p>Members of an <b>intergalactic alliance</b> <br /> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <Support />
      </>
      </article>
    </div>
  )
}
export default App
