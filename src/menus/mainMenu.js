import terminal from '../shortcuts/readlineInterface.js'
import { perguntar } from '../shortcuts/functionPerguntar.js'
import { calculadora } from '../tools/calculadora.js'

export default async function mainMenu() {
    while (true) {
        const opcao = await perguntar(`
        ╔════════════════════════════════╗
        ║          HELP TOOLS            ║
        ╠════════════════════════════════╣
        ║                                ║
        ║  1 - Calculadora               ║
        ║  2 - Tarefas                   ║
        ║  3 - Sair                      ║
        ║                                ║
        ╚════════════════════════════════╝
        Digite uma opção: `, terminal);

        switch(opcao) {
            case '1':
                await Calculadora();
                break;
            case '2':
                await Tarefas();
                break;
            case '3':
                terminal.close();
                return;
            default:
                console.log(`
        Insira uma opção válida.
                `)
        }
    }
}