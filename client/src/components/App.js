import React from 'react';
import { useState, useEffect } from 'react';

const App = () => {
  const [square, setSquare] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [square]);

  return (
    <div id="hello" onClick={() => { setSquare(!square); }}>
      {square ? 'Hello world' : 'Goodbye world'}<br />
    </div>
  );
};

export default App;
