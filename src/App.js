import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

const arr = ["one","two","three","four"];

const [a1] = arr;

const user = {
  ID : 1,
  Name : "aaqib"
}
const {ID,Name} = user

const user2 = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
function userId({id}) {
  return id;
}
function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}



const App = () => {
  
  return (
    <React.Fragment>
      <h1>Destructuring Demo</h1>
      <h2>{a1}</h2>
      <h2>{ID}</h2>
      <h2>{userId(user2)}</h2>
      <h2>{whois(user2)}</h2>
    </React.Fragment>
  );

}

export default App;
