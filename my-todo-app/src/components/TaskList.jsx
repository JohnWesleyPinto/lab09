import { useTasks } from '../context/TaskContext';

export function TaskList() {
  const { tasks } = useTasks();

  return (
    <ul>
      {tasks.map(task => <TaskItem key={task.id} task={task} />)}
    </ul>
  );
}

function TaskItem({ task }) { // O objeto 'task' vem do map, mas a ação é global
  const { toggleTask } = useTasks();

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTask(task.id)} 
      />
      {task.title}
    </li>
  );
}