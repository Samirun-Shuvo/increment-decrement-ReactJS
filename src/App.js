import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <Counter></Counter>
      </>
    </div>
  );
}
function Counter() {
  const [count,setCount]=useState(0);
  const incrementCounter =()=>setCount(count+1);
  const decrementCounter =()=>setCount(count-1);
  return(
    <> 
      <div className='counterComponent'>
        <h1>Counter :{count} </h1>
        <button onClick={decrementCounter} disabled={count===0?true:false}>Decrement</button>
        <button onClick={incrementCounter} disabled={count===5?true:false}>Increment</button>
      </div>
    </>
  )
}

export default App;
