import configPrompt from "prompt-sync";
import { Player } from "./Player";
import { ConsistentPlayer } from "./ConsistentPlayer";
import { RandomPlayer } from "./RandomPlayer";
import { displayHeroes, playAndPickWinner } from "./functions";

const prompt = configPrompt({sigint: true});
const chalk = require('chalk');
 
let heroes:Player[] = [
    new ConsistentPlayer("Eleanor", "rock"),
    new ConsistentPlayer("Tahani", "paper"),
    new ConsistentPlayer("Jason", "scissors"),
    new RandomPlayer("Chidi")
]
let villains:Player[] = [
    new ConsistentPlayer("Vicky", "paper"),
    new ConsistentPlayer("Trevor", "scissors"),
    new RandomPlayer("Mindy St. Claire"),
    new ConsistentPlayer("Shawn", "rock"),
    new RandomPlayer("Bad Janet"),
]

let totalWins:number = 0;
for (let villain of villains) {
    console.log( chalk.cyan(`You are facing ${villain.name}`) );
    console.log( chalk.cyan(`Who will you pick to battle for you?`) );
    displayHeroes(heroes);
    let heroChoiceName = prompt( chalk.inverse("Type a hero name:") );
    if (heroChoiceName === "Janet"){
        totalWins++;
        console.log( chalk.green(`Janet wins!!`) );
    } else{
        let heroChoiceIndex:number= heroes.findIndex(hero => hero.name === heroChoiceName);
        let winner:Player | null = playAndPickWinner(heroes[heroChoiceIndex], villain);
        if (winner === heroes[heroChoiceIndex]) {
            winner.winCount++
            console.log( chalk.green(`${winner.name} wins!!`) );
        } else if (winner === villain) {
            console.log( chalk.red(`${heroes[heroChoiceIndex].name} loses ):`) );
        } else {
            console.log( chalk.yellow(`TIE!`) );
        }
    }
    console.log(`**************`);
}
displayHeroes(heroes);
for (let hero of heroes){
    totalWins += hero.winCount;
}
console.log( chalk.magenta("Total hero wins: " + totalWins) );







