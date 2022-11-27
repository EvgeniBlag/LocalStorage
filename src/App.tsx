import React from 'react';
import './App.css';
import { Example } from './Example';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Example/>
       
        <p style={{color:'red'}}>
          Edit <code>src/App.tsx</code> Contador en localStorage
        </p>
       
      </header>
    </div>
  );
}

export default App;
