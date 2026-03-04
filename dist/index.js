"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Uma função 'async' indica que ela faz uma tarefa que pode demorar. Habilita o uso de 'await' dentro dela
function fetchExchangeRate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 'await' pausa a execução e espera a resopsta do servidor da api
            const response = yield fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
            // '.json()' transforma dados brutos para formato json
            const data = yield response.json();
            //retorna o valor da cotação atual convertido para número
            return Number(data.USDBRL.bid);
        }
        catch (error) {
            console.log("Erro ao obter cotação do dia. Usando cotação padrão.");
            return 5.00;
        }
    });
}
// como estamos usando 'await' temos que encapsular o código em uma função 'async'
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const prompt = (0, prompt_sync_1.default)();
        // como a 'fetchExchangeRate' é assíncrona, também precisamos do 'await' aqui;
        // o 'exchangeRate' só será definido depois que a função retornar algum resultado.    
        let exchangeRate = yield fetchExchangeRate();
        console.log(`
    =======================================
    CURRENCY CONVERTER - BRL / USD
    =======================================
    Este programa converte valores entre Real (BRL) e Dólar (USD).
    Cotação: 1.00 USD = ${exchangeRate} BRL`);
        let option;
        do {
            console.log("\nMenu: ");
            console.log("1. BRL para USD");
            console.log("2. USD para BRL");
            console.log("3. Alterar cotação");
            console.log("4. Buscar cotação do dia");
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
                    console.log(`\nCotação: 1.00 USD = ${exchangeRate.toFixed(2)} BRL`);
                    break;
                case '4':
                    exchangeRate = yield fetchExchangeRate();
                    console.log(`Cotação do dia: 1.00 USD = ${exchangeRate.toFixed(2)} BRL`);
                    break;
                case '0':
                    console.log("\nSaindo...");
                    break;
                default:
                    console.log("Opção inválida.");
            }
        } while (option != '0');
    });
}
// chamada da função principal que inicia o fluxo 'async'
start();
