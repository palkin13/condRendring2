import React from "react";
 import Login from "./Login";



var loggedin = true;

const currentTime = new Date(2020 , 1, 1 , 15).getHours();
//console.log(currentTime);


// function renderConditionally(){
// if ( loggedin === true){
//   return <h1>Hello</h1>
// }
// else{
//   return (
//     <Login />
// ); 
// }
// }

function App() {
  return <div className="container"> {
  // loggedin  ? <h1>Hello</h1> : <Login />

  currentTime > 12 ? <h1>Whyyyy you are working go n sleepp😴😴🥱🥱</h1> : <h1>Enjoyyyy🥰🤩😍🤗</h1>


 } </div>;
}

export default App;
