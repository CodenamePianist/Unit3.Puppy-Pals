import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  
  console.log(puppies);
  return (
    <>
      
    </>
  )
}

export default App
