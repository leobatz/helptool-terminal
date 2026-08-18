import terminal from '../shortcuts/readlineInterface.js'
import { perguntar } from '../shortcuts/functionPerguntar.js'
import { calculadora } from '../tools/calculadora.js'

export default async function mainMenu() {
    const opcao = await perguntar(`
    ╔════════════════════════════════╗
    ║          HELP TOOLS            ║
    ╠════════════════════════════════╣
    ║                                ║
    ║  1 - Calculadora               ║
    ║  2 - Conversor                 ║
    ║  3 - Sair                      ║
    ║                                ║
    ╚════════════════════════════════╝
    
    Digite uma opção: `, terminal);

    switch(opcao) {
        case 'calculadora':
            await calculadora();
    }
}