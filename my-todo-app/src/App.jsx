import { TaskProvider } from './context/TaskContext';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
        <Header />
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;