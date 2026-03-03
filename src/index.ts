import promptSync from "prompt-sync";


async function fetchExchangeRate(): Promise<number> {
    try {
        const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
        const data = await response.json();
        return Number(data.USDBRL.bid);
    } catch (error) {
        return 5.00;
    }
}

async function start() {

    
    const prompt = promptSync();
    //let exchangeRate:number = 5.00
    
    let exchangeRate = await fetchExchangeRate();

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
                exchangeRate = await fetchExchangeRate();
                console.log(`Cotação do dia: 1.00 USD = ${exchangeRate.toFixed(2)} BRL`);
                break;
            case '0':
                console.log("\nSaindo...");
                break;
            default:
                console.log("Opção inválida.");
        }

    } while(option != '0');
}

start();