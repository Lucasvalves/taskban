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
  };
  
  function replacePosition(task, keyTaslList, to) {
    const newList = tasks[keyTaslList].filter(item => item.id !== task.id)
    newList.splice(to, 0, task)
    const newTasks = {
      ...tasks,
      [keyTaslList]: newList,
    }
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTasks(newTasks)
  }
  
  function replaceList(task, index,from,to) {
  
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

  return { addTask, replacePosition, replaceList };
}
