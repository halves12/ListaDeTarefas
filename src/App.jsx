import './styles/global.scss';
import { Header } from './components/Header';
import { RegisterTask } from './components/RegisterTask';
import './style.scss';
import { ContainerTasks } from './components/ContainerTasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  function createTask(titleTask) {
    const newTask = {
      id: Date.now().toString(),
      checked: false,
      titleTask
    }

    setTasks((oldValue) => [...oldValue, newTask]);
  }

  function checkedTask(id) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        return {
          id: task.id,
          checked: !task.checked,
          titleTask: task.titleTask
        }
      } else {
        return task;
      }
    })

    setTasks(updatedTasks);
  }

  function handleDeleteTask(id) {
    const updatedDeleteTasks = tasks.filter(task => {
      return task.id !== id;
    })
    

    setTasks(updatedDeleteTasks)
  }

  return (
    <div>
      <Header />
      <main className="containerApp">
        {/* Criacao da tarefa */}
        <RegisterTask createTask={createTask} />
        {/* Listagem das tarefas */}
        <ContainerTasks tasks={tasks} checkedTask={checkedTask} deleteTask={handleDeleteTask} />
      </main>
    </div>
  )
}

export default App
