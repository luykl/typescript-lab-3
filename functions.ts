import { Player } from "./Player";
import { ConsistentPlayer } from "./ConsistentPlayer";

export function playAndPickWinner(player1:Player, player2:Player):Player | null {
    const player1Symbol:string = player1.pickSymbol();
    const player2Symbol:string = player2.pickSymbol();
    console.log(`${player1.name} plays ${player1Symbol}`);
    console.log(`${player2.name} plays ${player2Symbol}`);
    
    if (player1Symbol === "rock" && player2Symbol === "scissors") {
        return player1;
    } else if (player1Symbol === "rock" && player2Symbol === "paper"){
        return player2;
    } else if (player1Symbol === "paper" && player2Symbol === "rock"){
        return player1;
    } else if (player1Symbol === "paper" && player2Symbol === "scissors"){
        return player2;
    } else if (player1Symbol === "scissors" && player2Symbol === "rock"){
        return player2;
    } else if (player1Symbol === "scissors" && player2Symbol === "paper"){
        return player1;
    } else {    
    return null;
    }
}

export function displayHeroes(players: Player[]):void {
    for (let player of players) {
        console.log(`${player.name} (${player.winCount} wins)`)
    }
}