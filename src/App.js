import logo from './logo.svg';
import './App.css';

const App = () => {
  var users = [
    { name: 'Robin', isDeveloper: true },
    { name: 'Markus', isDeveloper: false },
    { name: 'Wic', isDeveloper: true },
  ];
 
  return (
    <ul>
      {users
        .filter(user => user.isDeveloper)
        .map(user => <li>{user.name}</li>)
      }
    </ul>
  );
};
 
export default App;
