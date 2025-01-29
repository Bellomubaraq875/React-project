import { useState } from 'react';
import { LineGraph } from "./components/line";
import { BarChart } from './components/bar';
import { PieChart } from './components/pie';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'> 
    {""}
    <LineGraph/>
    <BarChart/>
    <PieChart/>
    </div>
  )
}

export default App
