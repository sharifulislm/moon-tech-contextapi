import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import './File1.css';

const File1 = () => {
    const {count} =useContext(COUNTER_CONTEXT);
    return (
        <>
        <div class="card">
 
  <h3>{count}</h3>
  <p>Card description goes here.</p>
  <a href="#">Learn more</a>
</div>
</>

    );
};

export default File1;