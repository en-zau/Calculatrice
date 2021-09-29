const prompt = require('prompt-sync')({sigint: true});

let X = 0;
let Y = 0;
let operateur = "+";
let valeurRenvoi;
  

function CestX() {
    X = parseInt(prompt (`Chiffre numero 1 : `));
    return X;
}
function CestY() {
    Y = parseInt(prompt (`Chiffre numero 2 : `));
    return Y;
}
function Cestoperateur() {
    operateur = prompt (`operateur (+,-,/,*) : `);
    return operateur;
}

switch (Cestoperateur()) {
    case "+":
      valeurRenvoi = CestX() + CestY();
      break;
    case "-":
      valeurRenvoi = CestX() + CestY();
      break;
    case "*":
      valeurRenvoi = CestX() * CestY();
      break;
    case "/":
      valeurRenvoi = CestX() / CestY();
      break;
  }
  console.log(valeurRenvoi);

  

