let Colley = require('colley-rankings');
let C = Colley(4) // Create a 5-team league

let matchups = [[3,1],[0,1],[2,0],[3,0],[3,2],[0,2],[2,0],[3,0]]

matchups.forEach(game => {
	let winner_id = game[0];
	let loser_id = game[1];
	C.addGame(winner_id, loser_id);		
});

unsortedRankings = C.solve().array

console.log(unsortedRankings);