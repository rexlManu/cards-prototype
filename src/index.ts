import CardGame from "./game";

const game = new CardGame();

process.on("exit", () => game.exit());

game.startup();
