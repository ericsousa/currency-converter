import promptSync from "prompt-sync";

const prompt = promptSync();
let exchangeRate:number = 5.00

console.log(`
=======================================
   CURRENCY CONVERTER - BRL / USD
=======================================
Este programa converte valores entre Real (BRL) e Dólar (USD).
Cotação: 1.00 USD = ${exchangeRate} BRL`);

let option: String;

do {
    console.log("\nMenu: ");
    console.log("1. BRL para USD");
    console.log("2. USD para BRL");
    console.log("3. Alterar cotação");
    console.log("0. Sair");
    option = prompt("\nEscolhar uma opção: ");

    switch (option) {
        case '1':
            const valorBrl = Number(prompt("Entre o valor em BRL: "));
            console.log(`\nResultado: ${(valorBrl / exchangeRate).toFixed(2)} USD`);
            break;
        case '2':
            const valorUsd = Number(prompt("Entre o valor USD: "));
            console.log(`\nResultado: ${(valorUsd * exchangeRate).toFixed(2)} BRL`);
            break;
        case '3':
            exchangeRate = Number(prompt("Entre o valor da nova cotação: "));
            console.log(`\nCotação: 1.00 USD = ${exchangeRate} BRL`);
            break;
        case '0':
            console.log("\nSaindo...");
            break;
        default:
            console.log("Opção inválida.");
    }

} while(option != '0');