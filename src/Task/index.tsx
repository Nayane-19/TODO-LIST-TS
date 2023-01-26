import { ReactComponent as Trash } from "../assets/trash.svg";
import { ReactComponent as Check } from "../assets/check.svg";
import "./Task.scss";
import { TaskData } from "../@types/tasks";

interface TaskProps {
  taskSelected: TaskData;
  handleChangeStatuTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export function Task({ taskSelected, handleChangeStatuTask, handleDeleteTask }: TaskProps) {  
 function handleChangeStatusTask(id: number) {
    handleChangeStatuTask(id)
 } 
  
  return (
    <div className="Task">
      <div className="task-box">
        <div className="task-info">
          <input
            type="checkbox"
            className="input-radio"
            id={String(taskSelected.id)}
            onChange={(e) => handleChangeStatusTask(Number(e.target.id))}
            checked={taskSelected.isClonclude}
          />
          <label htmlFor={String(taskSelected.id)}>
            <div className="radio-btn">
              <Check className="check" />
            </div>
            <span>{taskSelected.description}</span>
          </label>
        </div>
        <Trash id={String(taskSelected.id)} onClick={() => handleDeleteTask(taskSelected.id)} />
      </div>
    </div>
  );
}
