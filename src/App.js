import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT, INCREMENT_BY } from './redux/actions/actions';

function App() {
  const counter = useSelector( ( state ) => state.counter );
  const dispatch = useDispatch();
  const increment = () => {
    dispatch( { type: INCREMENT } );
  }

  const decrement = () => {
    dispatch( { type: DECREMENT } );
  }

  const incrementBy = ( incrementValue ) => {
    dispatch( { type: INCREMENT_BY, incrementValue } );
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
