
import React, { useState } from 'react';
import './Tasklist.css'
import { Button, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Container, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateIcon  from '@mui/icons-material/Update';



const Tasklist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditingTask(index);
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    // setEditingTask(null)
   
  };

 function  updateTasks(){
  setEditingTask(null)
 }
  return (
    <>
     <div className='header'> <h1> addTask</h1></div>
    <Container maxWidth="sm">
       
      <TextField
        label="Enter task"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addTask} fullWidth>
        Add Task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} className="flex items-center">
            {editingTask === index ? (
              <>
                <TextField
                 value={task} 
                  onChange={(e) => updateTask(index, e.target.value)}
                  fullWidth
                />
                <IconButton onClick={() => updateTasks(index, task)}>
                  <UpdateIcon style={{color:'blue'}}/>
                </IconButton>
              </>
            ) : (
              <>
                <ListItemText primary={task} style={{color:index%2?"white":'black',background:index%2?'black':"white"}} />
                <ListItemSecondaryAction>
                  <IconButton style={{borderRadius:25}} onClick={() => editTask(index)}>
                    <EditIcon  style={{color:"green"}}/>
                  </IconButton>
                  <IconButton onClick={() => deleteTask(index)}>
                    <DeleteIcon  style={{color:'red'}} />
                  </IconButton>
                </ListItemSecondaryAction>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
    </>
  );
};

export default Tasklist;
