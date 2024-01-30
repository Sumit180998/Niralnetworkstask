import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Task() {
  const Navigate=useNavigate()
  return (
    <div className="App">
      <div className='tasklist'>
      <button className='butt' onClick={(()=>Navigate('/tasklist'))}> Task 1</button>
     
      <button className='butt' onClick={(()=>Navigate('/navbar'))}>Task 2</button>
     
      <button className='butt' onClick={(()=>Navigate('/Movielist'))}>Task 3</button>
      </div>

      
    </div>
  );
}

export default Task;
