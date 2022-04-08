import { DefaultRootState, useSelector } from "react-redux";
import { CardState } from "./cardState";

const generateSet = () : Array<CardState> =>{
    const result = new Array<CardState>(8);
    const fronts = ['A', 'B', 'C', 'D'];
    for(const f of fronts){
        for(let k = 0; k < 2; k++){
        let idx = Math.floor(Math.random() * 8.0);
        const card = new CardState(f);
        while(result[idx] != null){
            idx += 1;
            idx %= 8;
        }
        result[idx] = card;
        }
    }
    return result;
}
export interface cardGameState extends DefaultRootState {
    cardStates: Array<CardState>;
}
const initialState: cardGameState = {
    cardStates: generateSet()
};

export const GetCardOpen = (index : number) => useSelector((state: cardGameState )=> state.cardStates[index].open);
export const GetCardMatch = (index : number) => useSelector((state: cardGameState )=> state.cardStates[index].matched);
export const GetCardFront = (index : number) => useSelector((state: cardGameState )=> state.cardStates[index].front);

export interface Action{
    type: string
}
export interface CardClicked extends Action{
    indexClicked: number
}

export const reducer = (state = initialState, action: Action) => {
    switch(action.type){
        case 'CARD_CLICKED':
            const index = (action as CardClicked)?.indexClicked;
            console.log("received index " + index)
            if(index == null) return state;
            const openCards = state.cardStates.filter(f => f.open);
            console.log("open " + openCards.length);
            if(openCards.length < 2){
                const newf = [...state.cardStates];
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
                return { cardStates: newf};
            }
            else{
                const newf = [...state.cardStates];
                for(var k = 0; k < 7; k++){
                    newf[k].open = false;
                }
                newf[index].open = true;
                return { cardStates: newf};
            }
        default:
            return state;
    }
}