import terminal from '../shortcuts/readlineInterface.js'
import perguntar from '../shortcuts/functionPerguntar.js'
import { select } from '@clack/prompts';

async function calculadora() {
    while (true) {
        let primeiroNumero = await perguntar('Digite o primeiro número: ', terminal);
        primeiroNumero = Number(primeiroNumero);

        if (Number.isNaN(primeiroNumero)) {

        }
    }

    const opcaoOperador = await select({
        message: 'Selecione o operador:',
        options: [
            { label: '+', value: 'soma'},
            { label: '-', value: 'subtracao'},
            { label: '/', value: 'divisao'},
            { label: 'x', value: 'multiplicacao'}
        ]
    });

    let segundoNumero = await perguntar('Digite o segundo número: ', terminal);

}