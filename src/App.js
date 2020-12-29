import React from "react";
import Entry from './Entry';
import emojipedia from "../emojipedia.js";
function App (){
return( 
  <div>
    <h1>Welcome</h1>
     <div className="dictionary">
    {emojipedia.map((element)=>(
      <Entry 
       id={element.id}
       icon={element.icon}
       name={element.name}
       meaning={element.meaning}
       />
    ))}
  </div>
    </div>
   )
  }
  
export default App ;