import { useTasks } from '../context/TaskContext';

export function Header() {
  const { tasks } = useTasks();
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <header style={{ borderBottom: '1px solid #ccc', padding: '1rem' }}>
      <h1>Minhas Tarefas</h1>
      <p>Total: {tasks.length} | Concluídas: {completedCount}</p>
    </header>
  );
}