import './App.css';
import List from './List/List';

const list = [
  { id: 11, name: 'apple' }, 
  { id: 14, name: 'banana' }, 
  { id: 345, name: 'jackfruit' }, 
  { id: 55, name: 'watermelon' }
]
function App() {
  return (
    <div className="App">
      <List list={list}></List>
    </div>
  );
}

export default App;
