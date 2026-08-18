import terminal from '../shortcuts/readlineInterface.js'
import { perguntar } from '../shortcuts/functionPerguntar.js'

export async function calculadora() {
    while (true) {
        let primeiroNumero = await perguntar('Digite o primeiro número: ', terminal);
        primeiroNumero = Number(primeiroNumero);

        if (!Number.isNaN(primeiroNumero)) {
            break;
        } else {
            console.log('Digite apenas números!');
        }
    }

    terminal.close();

    const opcaoOperador = await perguntar(`
    ╔════════════════════════════════╗
    ║          CALCULADORA           ║
    ╠════════════════════════════════╣
    ║                                ║
    ║  1 - Soma (+)                  ║
    ║  2 - Subtração (-)             ║
    ║  3 - Divisão (/)               ║
    ║  4 - Multiplicação (x)         ║
    ║                                ║
    ╚════════════════════════════════╝
    Escolha o operador: `, terminal);

    while(true) {
        let segundoNumero = await perguntar('Digite o segundo número: ', terminal);
        segundoNumero = Number(segundoNumero);

        if (!Number.isNaN(segundoNumero)) {
            break;
        } else {
            console.log('Digite apenas números!');
        }
    }

    let resultadoCalculo;

    switch (opcaoOperador) {
        case 'soma':
            resultadoCalculo = primeiroNumero + segundoNumero;
            return console.log(`${primeroNumero} ${opcaoOperador} ${segundoNumero} = ${resultadoCalculo.toFixed(2)}`);
        case 'subtracao':
            resultadoCalculo = primeiroNumero - segundoNumero;
            return console.log(`${primeroNumero} ${opcaoOperador} ${segundoNumero} = ${resultadoCalculo.toFixed(2)}`);
        case 'divisao':
            resultadoCalculo = primeiroNumero / segundoNumero;
            return console.log(`${primeroNumero} ${opcaoOperador} ${segundoNumero} = ${resultadoCalculo.toFixed(2)}`);
        case 'multiplicacao':
            resultadoCalculo = primeiroNumero * segundoNumero;
            return console.log(`${primeroNumero} ${opcaoOperador} ${segundoNumero} = ${resultadoCalculo.toFixed(2)}`);
    }
}