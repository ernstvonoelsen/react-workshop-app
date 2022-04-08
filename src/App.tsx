import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';

const cardStyle : CSSProperties = {
  border: '1px solid black',
  width: 150,
  height: 150,
  margin: 20,
  textAlign: 'center',
  display: 'flex'
}

export const Card = (props:{content?:string}) =>{
  return <div style={cardStyle} className="card">
    <span>
      { props.content == null ? 'Card' : props.content }
    </span>
  </div>
}
export const Field = (props:any) =>{
  return <div>
    <div style={{'display': 'flex'}}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <div style={{'display': 'flex'}}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
}

export function App() {
  return (
    <div className="App">
      <Field />
    </div>
  );
}
