import { useState } from 'react';

import { Main } from './components/Main';
import { Aside } from './components/Aside';

import './App.css';


function App() {
  const [horizontalShowMode, toggleHorizontalShowMode] = useState(true);
  const [targetCard, setTargetCard] = useState(null);

  return (
    <div className="App">
      <div className="App__main">
        <Main 
          horizontalShowMode={horizontalShowMode} 
          chooseCard={setTargetCard}
        />
      </div>
      <div className="App__aside">
        <Aside 
          isHorizontal={horizontalShowMode} 
          setShowMode={toggleHorizontalShowMode}
          targetCard={targetCard}
        />
      </div>
    </div>
  );
}

export default App;
