import { ref, reactive } from 'vue'

export const useTaskStore = () => {
  var tasks = JSON.parse(localStorage.getItem('tasks'))
  var tareasVencidas =  JSON.parse(localStorage.getItem('tareasVencidas'))
  var tareasCompletadas = JSON.parse(localStorage.getItem('tareasCompletadas'))

  function createTask(task) {
    tasks.push(task)
    localStorage.removeItem("tasks")
    localStorage.setItem("tasks",JSON.stringify(tasks))

  }

  function deleteTasksByDeadline() {
    const currentDate = new Date()
    const expiredTasks = tasks.filter(task => new Date(task.deadline) < currentDate)
    expiredTasks.forEach(task => {
      tasks.splice(tasks.indexOf(task), 1)
      tareasVencidas.push(task)
    })
    localStorage.removeItem("tasks")
    localStorage.setItem("tasks",JSON.stringify(tasks))
    localStorage.removeItem("tareasVencidas")
    localStorage.setItem("tareasVencidas",JSON.stringify(tareasVencidas))
  }

  

  function editTask(index, updatedTask) {
    tasks[index] = updatedTask
    localStorage.removeItem("tasks")
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }

  function deleteTask(index) {
    tasks.splice(index, 1)
    localStorage.removeItem("tasks")
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }
  function completeTask(index){
    const currentDate = new Date().toLocaleDateString();
    tasks[index].completed_at = currentDate;
    tareasCompletadas.push(tasks[index])
    localStorage.removeItem("tareasCompletadas")
    localStorage.setItem("tareasCompletadas",JSON.stringify(tareasCompletadas))
    deleteTask(index)
  }
  return {
    createTask,
    editTask,
    deleteTask,
    deleteTasksByDeadline,
    completeTask,
    tasks,
    tareasCompletadas,
    tareasVencidas
  }
}
