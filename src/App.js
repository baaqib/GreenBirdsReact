import logo from './logo.svg';
import './App.css';

function Apps(str){
  //return str + ' Example of Concatenation';
  return `${str} string interpolation`;
}

const App = () => <div>{Apps('Hi, This is ')}</div>;

export default App;
