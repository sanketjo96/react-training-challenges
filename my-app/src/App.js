import './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import ClickCounter from './Sample/ClickCounter';
import HoverCounter from './Sample/HoverCounter';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <HoverCounter label={'HoverCounter'}></HoverCounter>
        <ClickCounter label={'ClickCounter'}></ClickCounter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
