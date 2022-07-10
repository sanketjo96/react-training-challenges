import './App.css';
import ClickCounter from './Sample/ClickCounter';
import HoverCounter from './Sample/HoverCounter';


function App() {
  return (
    <div className="App">
      <HoverCounter label={'HoverCounter'}></HoverCounter>
      <ClickCounter label={'ClickCounter'}></ClickCounter>
    </div>
  );
}

export default App;
