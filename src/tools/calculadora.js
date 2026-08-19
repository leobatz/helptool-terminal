import terminal from '../shortcuts/readlineInterface.js'
import { perguntar } from '../shortcuts/functionPerguntar.js'

export async function Calculadora() {
    const operadores = ['1', '2', '3', '4'];

    let botaoInicio
    let opcaoOperador;
    let primeiroNumero;
    let segundoNumero;
    let resultadoCalculo;

    while (true) {
        
        while (true) {
            botaoInicio = await perguntar(`
        ╔════════════════════════════════╗
        ║          CALCULADORA           ║
        ╠════════════════════════════════╣
        ║                                ║
        ║          1 - INICIAR           ║
        ║          2 - VOLTAR            ║
        ║                                ║
        ╚════════════════════════════════╝
        Insira a opção que deseja: `, terminal);

            if (botaoInicio == 1) {
                break;
            } else if (botaoInicio == 2) {
                return;
            } else {
                console.log('Insira uma opção válida.');
                continue;
            }
        }

        while (true) {
            primeiroNumero = await perguntar('\nDigite o primeiro número: ', terminal);
            primeiroNumero = Number(primeiroNumero);

            if (!Number.isNaN(primeiroNumero)) {
                break;
            } else {
                console.log('Digite apenas números!');
            }
        }

        while (true) {
            opcaoOperador = await perguntar(`
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

            if (!operadores.includes(opcaoOperador)) {
                console.log('Insira um operador válido.');
            } else {
                break;
            }
        }

        while(true) {
            segundoNumero = await perguntar('\nDigite o segundo número: ', terminal);
            segundoNumero = Number(segundoNumero);

            if (!Number.isNaN(segundoNumero)) {
                break;
            } else {
                console.log('Digite apenas números!');
            }
        }

        switch (opcaoOperador) {
            case '1':
                resultadoCalculo = primeiroNumero + segundoNumero;
                console.log(`\n${primeiroNumero} + ${segundoNumero} = ${resultadoCalculo.toFixed(2)} / Resultado: ${resultadoCalculo.toFixed(2)}`);
                break;
            case '2':
                resultadoCalculo = primeiroNumero - segundoNumero;
                console.log(`\n${primeiroNumero} - ${segundoNumero} = ${resultadoCalculo.toFixed(2)} / Resultado: ${resultadoCalculo.toFixed(2)}`);
                break;
            case '3':
                resultadoCalculo = primeiroNumero / segundoNumero;
                console.log(`\n${primeiroNumero} / ${segundoNumero} = ${resultadoCalculo.toFixed(2)} / Resultado: ${resultadoCalculo.toFixed(2)}`);
                break;
            case '4':
                resultadoCalculo = primeiroNumero * segundoNumero;
                console.log(`\n${primeiroNumero} x ${segundoNumero} = ${resultadoCalculo.toFixed(2)} / Resultado: ${resultadoCalculo.toFixed(2)}`);
                break;
        }
    }
}