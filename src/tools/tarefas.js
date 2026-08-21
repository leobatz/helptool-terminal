import terminal from '../shortcuts/readlineInterface.js';
import { perguntar } from '../shortcuts/functionPerguntar.js';
import path from "node:path";
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

export async function Tarefas() {
    const filePath = path.join(process.cwd(), "data", "tarefas.json");

    if (!existsSync(filePath)) {
        writeFileSync(filePath, JSON.stringify([], null, 2), "utf-8"); 
    } //Caso o arquivo não exista, será criado um no caminho designado

    const data = readFileSync(filePath, { encoding: "utf-8" }); //Lê o arquivo e aramzena em data
    const parsed = JSON.parse(data); //Transforma o conteúdo json em um objeto javascript

    const tasks = new Map(parsed.map(task => [task.id, task]));

    function salvar(){
        const data = Array.from(tasks.values());
    }

    async function criarTarefa(){
        const name = await perguntar('Digite a tarefa: ', terminal);

        const task = {
            id: Date.now(),
            name,
            completed: false
        }

        tasks.set(task.id, task);

        console.log("Tarefa criada!")
    }

    while (true) {
        let opcao = await perguntar(`
    ╔════════════════════════════════╗
    ║            TAREFAS             ║
    ╠════════════════════════════════╣
    ║                                ║
    ║        1 - Criar Tarefa        ║
    ║        2 - Listar Tarefa       ║
    ║        3 - Concluir Tarefa     ║
    ║        4 - Voltar              ║
    ║                                ║
    ╚════════════════════════════════╝
    Insira a opção que deseja: `, terminal);

        switch (opcao) {
            case '1':
                await criarTarefa();
                break;
            case '2':
                listarTarefa();
                break;
            case '3':
                await concluirTarefa();
                break;
            case "4":
                console.log("Voltando...");
                return;
            default:
                console.log("Opção inválida.");
        }
    }
    
}

export async function criarTarefa() {

}
