export class CardState{
    constructor(front : string){
      this.front = front;
    }
    open: boolean = false;
    front: string = '';
    matched: boolean = false;
    public Clone(): CardState{
      const clone = new CardState(this.front);
      clone.open = this.open;
      clone.matched = this.matched;
      return clone;
    }
  }