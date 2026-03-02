import promptSync from "prompt-sync";

const prompt = promptSync();
let exchangeRate:number = 5.00

console.log(`
=====================================s==
   CURRENCY CONVERTER - BRL / USD
=======================================
Este programa converte valores entre Real (BRL) e Dólar (USD).
Cotação: 1.00 USD = ${exchangeRate} BRL

`);

console.log("Menu: ");
console.log("1. BRL para USB");
console.log("0. Sair");

const option = prompt("Escolhar uma opção: ");

switch (option) {
    case '1':
        const valorBrl = Number(prompt("Entre o valor em BRL: "));
        console.log(`Resultado: ${(valorBrl / exchangeRate).toFixed(2)} USD`);
        break;
    case '2':
        const valorUsd = Number(prompt("Entre o valor USD: "));
        console.log(`Resultado: ${(valorUsd * exchangeRate).toFixerd(2)} BRL`);
        break;
    case '0':
        console.log("Saindo...");
        break;
    default:
        console.log("Opção inválida.");
}

