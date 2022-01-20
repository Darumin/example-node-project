import React from 'react';
import { useState, useEffect } from 'react';

const Square = () => {
  // use the useState() function to set a default state and create
  // the state and the setState variables from the useState object
  const [square, setSquare] = useState(false);
  const [count, setCount] = useState(0);
  
  // let's use this list of colors
  const styles = ['coral', 'tomato', 'gold', 'peachpuff'];

  // the code below works like this: every time the variable square's state
  // changes:
  //
  // 1. useEffect() runs a callback function that setCounts and console.logs...
  // 2. the square variable acts like a "lightswitch", and is passed as second
  // argument in the useEffect function invocation.
  //
  // Open Chrome dev tools console to see this code run as you click the square.
  // if you put a state that changes on each render, you could create an infinite
  // loop, so be careful!
  useEffect(() => {
    setCount(count + 1);
    console.log(`You clicked on the square ${count} times!`);
  }, [square]);

  // a function that gets an index based on the count
  const getColorIndex = () => {
    return count % styles.length;
  };

  // clicking the square cycles through colors, and changes the text.
  // clicking toggles the setSquare function on and off with each click.
  // with each click, the useEffect increases the count state.
  // if the count state changes, it triggers a style rerendering for the
  // square, which changes the color. you can chain a bunch of events
  // with useState and useEffect!
  return (
    <div 
      id="square"
      onClick={() => { setSquare(!square); }}
      style={{ backgroundColor: styles[getColorIndex()] }}
    >
      {square ? 'Hello world!' : 'MCSP-10!'}<br />
    </div>
  );
};

export default Square;