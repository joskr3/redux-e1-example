import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './redux/store';

function App() {
  const counter = useSelector( ( state ) => state.counter );
  const dispatch = useDispatch();
  const increment = () => {
    dispatch( actions.increment() );
  }

  const decrement = () => {
    dispatch( actions.decrement() );
  }

  const incrementBy = ( incrementValue ) => {
    dispatch( actions.incrementBy( incrementValue ) );
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => incrementBy( 5 )}>+5</button>
    </div>
  );
}

export default App;
