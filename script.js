function sortear(max, min){            
    return Math.floor(Math.random() * (max - min +1)) + min;
}

let secreto = sortear(10, 1);
let tentativas = 0;
let jogo_on = true;

console.log(secreto);

const display = document.getElementById('but');

function verif(but) {
    if (!jogo_on) return

    tentativas ++

    if (but === secreto) {
        alert("Parabéns!")
        jogo_on = false
    }

    else if (tentativas < 3) {
        alert("numero errado");
    }

    else {
        alert("Resposta errada. Você perdeu suas chances.");
        jogo_on = false
    }
}