import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

const App = () => {
  const [showElement, setShowElement] = useState(false);
  
  const handleButtonClick = () => setShowElement(!showElement);

  return (
    <div>
      <Button handleClick={handleButtonClick}/>
      { showElement && <Display/>}
    </div>
  )
}
export default App;
