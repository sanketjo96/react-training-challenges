import './App.css';
import List from './List/List';

const list = ['apple', 'banana', 'jackfruit', 'watermelon']
function App() {
  return (
    <div className="App">
      <List list={list}></List>
    </div>
  );
}

export default App;
