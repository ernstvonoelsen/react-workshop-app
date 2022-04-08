import React, { CSSProperties, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import internal from 'stream';
import { NumericLiteral } from 'typescript';

const cardStyle : CSSProperties = {
  border: '1px solid black',
  width: 150,
  height: 150,
  margin: 20,
  textAlign: 'center',
}

export const Card = (props:{front: string, matched: boolean, faceUp: boolean, onClick: ()=>void}) =>{
  return <div onClick={() => {if(!props.matched) props.onClick();}} style={cardStyle} className="card">
    <span >
      { props.faceUp ? props.front : (props.matched ? 'Matched Card' : 'Card') }
    </span>
  </div>
}


const checkCard = (index: number, faces : Array<CardState>, setFaces: React.Dispatch<React.SetStateAction<CardState[]>>) =>{
  const openCards = faces.filter(f => f.open);
  console.log("open " + openCards);
  if(openCards.length < 2){
    const newf = [...faces];
    const tempMatch =  newf[index].matched;
    const tempOpen =  newf[index].open;
    const tempFront =  newf[index].front;
    newf[index] = new CardState(tempFront);
    newf[index].open = !tempOpen;
    newf[index].matched = tempMatch;
    setFaces(newf);
  }
  else{
    if(openCards[0].front === openCards[1].front){
      openCards[0].matched = true;
      openCards[1].matched = true;
    }

    const newf = [...faces];
    for(var k = 0; k < 7; k++){
      newf[k].open = false;
    }
    newf[index].open = true;
    setFaces(newf);
  }

}
class CardState{
  constructor(front : string){
    this.front = front;
  }
  open: boolean = false;
  front: string = '';
  matched: boolean = false;
}

export const Field = (props:any) =>{
  const [faces, setFaces] = useState([new CardState('A'), new CardState('A'), new CardState('B'), new CardState('B'),
  new CardState('C'), new CardState('C'), new CardState('D'),new CardState('D')]);
  return <div>
    <div style={{'display': 'flex'}}>
      <Card front={faces[0].front} faceUp={faces[0].open} matched={faces[0].matched} onClick={()=>{
        checkCard(0, faces, setFaces)
      }}/>
      <Card front={faces[1].front} faceUp={faces[1].open} matched={faces[1].matched} onClick={()=>{
        checkCard(1, faces, setFaces)
      }}/>
      <Card front={faces[2].front} faceUp={faces[2].open} matched={faces[2].matched} onClick={()=>{
        checkCard(2, faces, setFaces)
      }}/>
      <Card front={faces[3].front} faceUp={faces[3].open} matched={faces[3].matched} onClick={()=>{
        checkCard(3, faces, setFaces)
      }}/>
    </div>
    {/* <div style={{'display': 'flex'}}>
      <Card front={'B'} faceUp={faces[4]}onClick={()=>{
        checkCard(4, faces, setFaces)
      }}/>
      <Card front={'D'} faceUp={faces[5]}onClick={()=>{
        checkCard(5, faces, setFaces)
      }}/>
      <Card front={'C'} faceUp={faces[6]}onClick={()=>{
        checkCard(6, faces, setFaces)
      }}/>
      <Card front={'D'} faceUp={faces[7]}onClick={()=>{
        checkCard(7, faces, setFaces)
      }}/>
    </div> */}
  </div>
}


export function App() {
  return (
    <div className="App">
        <Field/>
    </div>
  );
}