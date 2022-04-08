import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

export const Card = (props: {index: number}) => <p> {'Card' + props.index} </p>;

export const Field = () => <Card index={1}/>;

export function App() {
  return (
    <div className="App">
        <Field/>
    </div>
  );
}


