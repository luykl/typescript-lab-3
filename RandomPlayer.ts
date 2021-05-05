import { Player } from "./Player";

export class RandomPlayer extends Player {
    constructor(name:string) {
        super(name);
    }
    pickSymbol():string {
        let randomNumber:number = Math.floor(Math.random() * 3);
        if (randomNumber === 0){
            return "rock";
        } else if (randomNumber === 1) {
            return "paper";
        } else if (randomNumber === 2) {
            return "scissors";
        } else {
           return "uh oh there's a problem here";
        }
        
    }

}