import { select } from '@clack/prompts';

export default function mainMenu() {
    const opcao = await select({
        message: 'Escolha uma ferramenta:',
        options: [
            { label: 'Calculadora',  value: 'calculadora' },
        ],
    });

    switch(opcao) {
        case 'calculadora':
    }
}