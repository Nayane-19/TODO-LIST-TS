import "./TodoCreate.scss"
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Clipboard } from "../assets/Clipboard.svg";
import { Task } from "../Task";
import { useEffect, useState } from "react";
import { TaskData } from "../@types/tasks";

export function TodoCreate() {
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [concludedTasks, setConcludedTasks] = useState<number>(0);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    var i = 0;
    var soma = tasks.filter((item) => item.isClonclude === true).reduce(function (acumulador) {
      return acumulador + 1;
  }, i)

  setConcludedTasks(soma)
  
  }, [tasks])

  function handleChangeStatuTask(id: number) {   
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {        
        return { ...task, isClonclude: !task.isClonclude };
      }
      return task;
    });    
    setTasks(updatedTasks);    
  }

  function handleDeleteTask(id: number) {
    const newTasks = tasks.filter((item) => item.id !== id)

    setTasks(newTasks);
 }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((prevState) => [...prevState, {
      description: newTask,
      isClonclude: false,
      id: Math.random(),
    }])
    setNewTask("")
  }

    return (
        <div className="Todo">
          <form className="TodoCreate" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask}/>
            <button type="submit">
                Criar
                <Plus />
            </button>
          </form>
          <div className="info-tasks">
            <div className="numbers">
              <span className="created">Tarefas criadas:</span>
              <span className="number-created">{tasks?.length}</span>
            </div>
            <div className="numbers">
              <span className="conclude">Concluídas:</span>
              <span className="number-created">{concludedTasks} de {tasks?.length}</span>
            </div>
          </div>
          {tasks?.length === 0 ?
            <div className="no-tasks">
              <Clipboard />
              <p>Você ainda não tem terefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
            : 
            tasks?.map((item) => {
              return (
                <Task
                  taskSelected={item}
                  key={item.id}
                  handleChangeStatuTask={handleChangeStatuTask}
                  handleDeleteTask={handleDeleteTask}
                />
              )
            })
          }
        </div>
    );
}