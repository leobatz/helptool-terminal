import terminal from '../shortcuts/readlineInterface.js'
import perguntar from '../shortcuts/functionPerguntar.js'

terminal.question("Digite o primeiro número: ", (resposta) => {
    console.log(`Olá, ${resposta}!`);

    rl.close();
});

