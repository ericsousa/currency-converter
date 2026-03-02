import promptSync from "prompt-sync";

const prompt = promptSync();

const nome:string = prompt("Digite seu nome: ");
const idade:string = prompt("Digite sua idade: ");

console.log(`Olá, ${nome}! Voce tem ${idade} anos.`);
