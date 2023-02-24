import React from 'react';
import './File1.css';

const Chaild = ({count,setCount}) => {
    return (
        <div class="card">
 

        <p>Card description goes here.</p>
      <button className='button' onClick={() => setCount(count -1)}>
        Decrement
      </button>
      <br></br>
      <br></br>
      <button className='button' onClick={() => setCount((prvState) => prvState +1)}>
       Increment
      </button>
      </div>
    );
};

export default Chaild;