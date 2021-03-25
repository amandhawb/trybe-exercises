let peca1 = "rei";
let peca2 = "dama";
let peca3 = "torre";
let peca4 = "peao";
let peca5 = "cavalo";
let peca6 = "bispo";

let qualMovimento = "oi";

if(qualMovimento === peca1){
    console.log("Uma casa em qualquer direção");
} else if (qualMovimento === peca2){
    console.log("Qualquer número de casas em qualquer direção");
} else if (qualMovimento === peca3){
    console.log("Em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas.");
} else if (qualMovimento === peca4){
    console.log("Somente para frente, uma casa por vez. Uma exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas");
} else if (qualMovimento === peca5){
    console.log("Unica peça que pode pular sobre outras peças. move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.");
} else if (qualMovimento === peca6){
    console.log("Linha reta diagonalmente no tabuleiro quantas casas quiser.");
} else {
    console.log("Erro. Peça inválida.")
}