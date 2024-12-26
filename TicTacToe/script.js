let turn = 1; // Proměnná, která sleduje, kdo má na řadě: 1 = hráč X, 2 = hráč O
let h1 = document.getElementById("h1");
let playerAPoints=document.getElementById("playerAPoints")
let playerBPoints=document.getElementById("playerBPoints")
let scorePlayerA=0;
let scorePlayerB=0;

let playerA = []; // Pole pro tahy hráče A (X)
let playerB = []; // Pole pro tahy hráče B (O)


function changeCellContent(cell) {
  // Pokud je buňka prázdná, přidej X nebo O podle aktuálního hráče
  if (cell.innerHTML === "") {
    if (turn % 2 !== 0) {
      cell.innerHTML = "X"; // Hráč X
      playerA.push(cell.id); // Přidáme ID buňky hráče B
      h1.innerHTML = "Hraje hráč B";
    } else {
      cell.innerHTML = "O"; // Hráč O
      playerB.push(cell.id); // Přidáme ID buňky hráče A
      h1.innerHTML = "Hraje hráč A";
    }

    // Po každém tahu změň hráče
    turn++;

    // Zkontroluj, zda někdo vyhrál
    if (checkWinner(playerA)) {
      h1.innerHTML = "Hráč A vyhrál!";
      scorePlayerA++;
      playerAPoints.innerHTML=scorePlayerA;
      
    
    } else if (checkWinner(playerB)) {
      h1.innerHTML = "Hráč B vyhrál!";
      scorePlayerB++;
      playerBPoints.innerHTML=scorePlayerB;
    }
  }
}

function checkWinner(player) {
  // Definice vítězných kombinací
  const winningCombinations = [
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a1', 'b2', 'c3'],
    ['a3', 'b2', 'c1']
  ];

  // Zkontroluj každou vítěznou kombinaci, jestli je celá obsažena v hráčově tazích
  return winningCombinations.some(combination => 
    combination.every(cell => player.includes(cell))
  );
}
