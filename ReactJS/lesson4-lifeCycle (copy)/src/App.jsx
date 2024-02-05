import { useState } from "react";
import dataOne from "./data/data-one";
import dataTwo from "./data/data-two";
import List from "./components/List";
const App = () => {
    const [state,setState] = useState(dataOne);
    
    
  return (
    <div>

        <button onClick={()=>setState(dataOne)}>change1</button>
        <button onClick={()=>setState(dataTwo)}>change2</button>
        {state.map(item=><List title={item.title} price={item.price} />)}
        
        
    </div>
  )
}

export default App