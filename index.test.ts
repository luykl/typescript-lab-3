import { ConsistentPlayer } from "./ConsistentPlayer";
import { RandomPlayer } from "./RandomPlayer";
import { playAndPickWinner } from "./functions";

describe("Consistent Player", () => {
    test("name and symbol set by constructor", () => {
        let player:ConsistentPlayer = new ConsistentPlayer("Michael", "rock")
        expect(player.name).toBe("Michael");
        expect(player.symbol).toBe("rock");
        expect(player.winCount).toBe(0);
    });

    test("name and symbol set by constructor", () => {
        let player:ConsistentPlayer = new ConsistentPlayer("Janet", "scissors")
        expect(player.name).toBe("Janet");
        expect(player.symbol).toBe("scissors");
        expect(player.winCount).toBe(0);
    });

});

describe("playAndPickWinner", () => {
    test("rock and scissors", () => {
        let player1:ConsistentPlayer = new ConsistentPlayer("Michael", "rock");
        let player2:ConsistentPlayer = new ConsistentPlayer("Janet", "scissors");
        let result = playAndPickWinner(player1, player2);
        expect(result).toBe(player1);
    });
    test("rock and paper", () => {
        let player1:ConsistentPlayer = new ConsistentPlayer("Michael", "rock");
        let player2:ConsistentPlayer = new ConsistentPlayer("Janet", "paper");
        let result = playAndPickWinner(player1, player2);
        expect(result).toBe(player2);
    });
    test("rock and rock", () => {
        let player1:ConsistentPlayer = new ConsistentPlayer("Michael", "rock");
        let player2:ConsistentPlayer = new ConsistentPlayer("Janet", "rock");
        let result = playAndPickWinner(player1, player2);
        expect(result).toBe(null);
    });
    test("paper and scissors", () => {
        let player1:ConsistentPlayer = new ConsistentPlayer("Michael", "paper");
        let player2:ConsistentPlayer = new ConsistentPlayer("Janet", "scissors");
        let result = playAndPickWinner(player1, player2);
        expect(result).toBe(player2);
    });
    test("paper and rock", () => {
        let player1:ConsistentPlayer = new ConsistentPlayer("Michael", "paper");
        let player2:ConsistentPlayer = new ConsistentPlayer("Janet", "rock");
        let result = playAndPickWinner(player1, player2);
        expect(result).toBe(player1);
    });
    test("paper and paper", () => {
        let player1:ConsistentPlayer = new ConsistentPlayer("Michael", "paper");
        let player2:ConsistentPlayer = new ConsistentPlayer("Janet", "paper");
        let result = playAndPickWinner(player1, player2);
        expect(result).toBe(null);
    });
    test("scissors and paper", () => {
        let player1:ConsistentPlayer = new ConsistentPlayer("Michael", "scissors");
        let player2:ConsistentPlayer = new ConsistentPlayer("Janet", "paper");
        let result = playAndPickWinner(player1, player2);
        expect(result).toBe(player1);
    });
    test("scissors and rock", () => {
        let player1:ConsistentPlayer = new ConsistentPlayer("Michael", "scissors");
        let player2:ConsistentPlayer = new ConsistentPlayer("Janet", "rock");
        let result = playAndPickWinner(player1, player2);
        expect(result).toBe(player2);
    });
    test("scissors and scissors", () => {
        let player1:ConsistentPlayer = new ConsistentPlayer("Michael", "scissors");
        let player2:ConsistentPlayer = new ConsistentPlayer("Janet", "scissors");
        let result = playAndPickWinner(player1, player2);
        expect(result).toBe(null);
    });


});

