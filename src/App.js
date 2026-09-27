import { useEffect, useState } from "react";
import Advice from "./Advice.js";


function App() {
  const API_URL = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("please click the button");

  const [count,setCount] =useState(0)
  const getAdvice = async () => {
    try {
      const response = await fetch(API_URL);
      const listItems = await response.json();

      setAdvice(listItems.slip.advice);
      setCount((preCount)=>preCount+1)
      
       } 
    catch (err) {
      console.log(err.stack);
    }
    };

  useEffect(() => {
     getAdvice();
  }, []);

  


  return (
    <div className="App">
        <Advice
          advice={advice}
          setAdvice={setAdvice}
          getAdvice={getAdvice}
          count={count}
          setCount={setCount}
        />
    </div>
  );
}

export default App 