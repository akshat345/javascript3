const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};
//destructuring the arrays
const [players1,players2]=game.players;
console.log(players1,players2);

//secong question
const [gk,...fieldPlayers]=players1;
console.log(gk,fieldPlayers);

//third players
const allPlayers=[...players1,...players2];
console.log(allPlayers);

//fourth question
const playerFinal=[players1,'Thiago', 'Coutinho' , 'Perisic'];

//
const odd={team1,x:draw,team2}
console.log(team1,draw,team2);

//sixth question
