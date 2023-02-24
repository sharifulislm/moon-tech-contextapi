import React, { createContext, useState } from 'react';
import Chaild from './Page/Chaild';
import File1 from './Page/File1';
export const COUNTER_CONTEXT = createContext();
const App = () => {
  const [count, setCount] = useState(0);
  const value = {count, setCount};
  return (
    <COUNTER_CONTEXT.Provider value={value}>
    <div>
    <div class="card">
 
 <h3>{count}</h3>

<Chaild count={count} setCount={setCount}></Chaild>
</div>

      <File1></File1>
    </div>
    </COUNTER_CONTEXT.Provider>
  );
};

export default App;