import React,{useState} from 'react';
import './App.css';
import TimeSeries from './timeSeries'

function App() {
  const [data, setData] = useState(
    Array.from({ length: 50 }, () => Math.round(Math.random() * 100))
  );
  return (
    <div className="App">
      <div>
        Time series chart
        <TimeSeries data={data} />
      </div>
    </div>
  );
}

export default App;
