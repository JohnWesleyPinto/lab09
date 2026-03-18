import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

export function AddTask() {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '1rem 0' }}>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Nova tarefa..." 
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}