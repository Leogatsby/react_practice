import React, { useState}  from 'react';

function App() {

  const [ count ,setCount ] = useState(0);

  const countUp = () => {
    setCount(count +1 );
  }

  const countDown = () => {
    setCount(count -1);
  }

  return (
    <div className="App">
      <div>
        숫자상태  : {count}
      </div>
      <button onClick={countUp}> 숫자업 </button>
      <button onClick={countDown}> 숫자업 </button>
    </div>

  );
}

export default App;
