import './App.css'
import React from 'react';
import { useState } from 'react';


function App() {
    const [tasks, setTasks] = useState([]);

    const [text, setText] = useState('');


    function addTask(text) {
      const newTask = {
      id: Date.now(),
      text
      };
      setTasks([...tasks, newTask]);
      setText('');
    }


    function deleteTask(id) {
      setTasks(tasks.filter(task => task.id !== id));
    }



  return (
    <>
      <div>
        <div>
          <input 
              value={text}
              onChange={e => setText(e.target.value)} >
          </input>
          <button 
              onClick={() => addTask(text)}>
              Add
          </button>
        </div>

        <div>
          {tasks.map(task => (
            <li>
              <p>
                {task.text}
              </p>
              <button 
                onClick={() => deleteTask(task.id)}>
                Del
              </button>
            </li> 
          ))
        }
        </div>

      </div>
    </>
  )
}

export default App



  

 
 