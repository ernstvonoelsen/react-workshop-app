import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';

const cardStyle : CSSProperties = {
  border: '1px solid black',
  width: 150,
  height: 150,
  margin: 20,
  textAlign: 'center',
  alignSelf: 'center'
}

export const Card = (props:{front: string, back: string}) =>{
  return <div style={cardStyle} className="card">
    <span>
      {props.back }
    </span>
  </div>
}
export const Field = (props:any) =>{
  return <div>
    <div style={{'display': 'flex'}}>
      <Card front={''} back={'1'}/>
      <Card front={''} back={'2'}/>
      <Card front={''} back={'3'}/>
      <Card front={''} back={'4'}/>
    </div>
    <div style={{'display': 'flex'}}>
      <Card front={''} back={'5'}/>
      <Card front={''} back={'6'}/>
      <Card front={''} back={'7'}/>
      <Card front={''} back={'8'}/>
    </div>
  </div>
}


export function App() {
  return (
    <div className="App">
        <Field/>
    </div>
  );
}