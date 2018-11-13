let Colley = require('colley-rankings');
let C = Colley(5) // Create a 5-team league

let winner_id = 4;
let loser_id = 2;
C.addGame(winner_id, loser_id);

console.log(C.solve());