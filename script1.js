// declaracao de variavel indefinida

let nome3;
console.log(nome3);

// declaracao de variavel vazia
let disciplina = null;
console.log(disciplina);

// declarando as variáveis
var nome="fiap";
console.log(nome);

let nome1="cidade";
console.log(nome1);

const nome2="javascript";
console.log(nome2);

// TIPOS DE VARIAVEIS

// inteiro
let idade = 18;
console.log(idade);

// float ou com casas decimais
let valor = 6.40;
console.log(valor);

// string (com aspas duplas)
let texto = "fiap";
console.log(texto);

// boolean
let aluno = true;
console.log(aluno);

// array - conjunto de informacoes
let tecnologias = ["Java", "C++", "HTML", "CSS"];
console.log(tecnologias);

// CONVERSOES

// conversao de float para int

let numeroFloat = 123.456;
console.log(numeroFloat);
console.log(parseInt(numeroFloat));

// conversao de string para float

let numeroString = "987.654";
console.log(numeroString);
console.log(parseFloat(numeroString));

// conversao de numero para string

let numeroInt = 789;
console.log(numeroInt);
console.log(numeroInt.toString());

// VER O TIPO DA VARIAVEL

let verTipo = typeof numeroInt;
console.log(verTipo);
// ou
console.log(typeof(numeroString));