import Todo from './components/todo';

function App() {
  return (
    <div>
      <Todo todo={{ id: 1, title: 'test', completed: false }} />
    </div>
  );
}

export default App;
