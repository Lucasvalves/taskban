import { TasksContext } from '../context/TasksContext';
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

export function useTasks() {
  const { tasks, setTasks } = useContext(TasksContext);
  const addTask = (task) => {
    const { todo } = tasks;
    const newTask = {
      ...task,
      id: uuid(),
    };
    const newTasks = {
      ...tasks,
      todo: [...todo, newTask],
    };
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
    //console.log(todo);
  };
  const removeTask = (idCard, nameTask)=>{
    
    switch (nameTask) {
      case "todo":
        const { todo } = tasks;
        const resultTodo = todo.map((task) => task).filter(task => task.id !== idCard)
        const newListTodo = {
          ...tasks,
          todo: resultTodo,
        };
        return localStorage.setItem('tasks', JSON.stringify(newListTodo)), setTasks(newListTodo)
      case "doing":
        const { doing } = tasks;
        const resultDoing = doing.map((task) => task).filter(task => task.id !== idCard)

        const newListDoing = {
          ...tasks,
          doing: resultDoing,
        };
        return localStorage.setItem('tasks', JSON.stringify(newListDoing)), setTasks(newListDoing) 
      case "qa":
        const { qa } = tasks;
        const resultQa = qa.map((task) => task).filter(task => task.id !== idCard)

        const newListQa = {
          ...tasks,
          qa: resultQa,
        };
        return localStorage.setItem('tasks', JSON.stringify(newListQa)), setTasks(newListQa)
      case "done":
        const { done } = tasks;
        const resultDone = done.map((task) => task).filter(task => task.id !== idCard)

        const newListDone = {
          ...tasks,
          done: resultDone,
        };
        return localStorage.setItem('tasks', JSON.stringify(newListDone)), setTasks(newListDone)
    }

  }
  
  function replacePosition(task, keyTaskList, to) {
    const newList = tasks[keyTaskList].filter(item => item.id !== task.id)
    newList.splice(to, 0, task)
    const newTasks = {
      ...tasks,
      [keyTaskList]: newList,
    }
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTasks(newTasks)
  }
  
  function replaceList(task, index, from, to) {
  
    const newList = tasks[to]
    newList.splice(index, 0, task)
    const newTasks = {
      ...tasks,
      [from]: tasks[from].filter(item => item.id !== task.id),
      [to]: newList,
    }
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTasks(newTasks)
    if (to === "done") {
      toast.success("Tarefa concluída com sucesso!", {
        icon: '👏',})
    }
  }

  return { addTask, removeTask, replacePosition, replaceList };
}
