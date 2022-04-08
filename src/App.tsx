import React, { CSSProperties, useState, useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import { CardState } from './cardState';
import { GetCardOpen, GetCardMatch, GetCardFront, reducer, CardClicked } from './Reducer';

const cardStyle : CSSProperties = {
  border: '1px solid black',
  width: 150,
  height: 150,
  margin: 20,
  textAlign: 'center',
}

const store = createStore(reducer);

export const Card = (props:{index: number}) =>{
  const open = GetCardOpen(props.index);
  const matched = GetCardMatch(props.index);
  const front = GetCardFront(props.index);
  console.log({'open': open, 'matched': matched, 'front': front});
  const dispatch = useDispatch();
  // useEffect(() => {
    // const fetchData = async () => {
    // const response = await fetch(
    // "https://external-click-counter.com/howmanyofthoseclickswegot"
    // );
    // const parsedResponse = await response.json();
    
    // };
    // fetchData();
    // }, []);
  return <div onClick={() => {if(!matched) dispatch({type:'CARD_CLICKED', indexClicked:props.index});}} style={cardStyle} className="card">
    <span >
      { open ? front : (matched ? 'Matched Card' : 'Card') }
    </span>
  </div>
}


const checkCard = (index: number, faces : Array<CardState>, setFaces: React.Dispatch<React.SetStateAction<CardState[]>>) =>{
  const openCards = faces.filter(f => f.open);
  console.log("open " + openCards.length);
  if(openCards.length < 2){
    const newf = [...faces];
    const tempMatch =  newf[index].matched;
    const tempOpen =  newf[index].open;
    const tempFront =  newf[index].front;
    newf[index] = new CardState(tempFront);
    newf[index].open = !tempOpen;
    newf[index].matched = tempMatch;
    var newOpen = newf.filter(f => f.open);
    console.log("new Open " + newOpen.length);
    if(newOpen.length === 2 && newOpen[0].front === newOpen[1].front){
      newOpen[0].matched = true;
      newOpen[1].matched = true;
      for(const o of newOpen){
        o.open = false;
      }
    }
    setFaces(newf);
  }
  else{
    const newf = [...faces];
    for(var k = 0; k < 7; k++){
      newf[k].open = false;
    }
    newf[index].open = true;
    setFaces(newf);
  }

}

export const Field = (props:any) =>{
  return <div>
    <div style={{'display': 'flex'}}>
      <Card index={0}/>
      <Card index={1}/>
      <Card index={2}/>
      <Card index={3}/>
    </div>
    <div style={{'display': 'flex'}}>
      <Card index={4}/>
      <Card index={5}/>
      <Card index={6}/>
      <Card index={7}/>
    </div>
    
  </div>
}


export function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Field/>
      </div>
    </Provider>
  );
}