import terminal from '../shortcuts/readlineInterface.js';
import { perguntar } from '../shortcuts/functionPerguntar.js';
import path from "node:path";
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

export async function Tarefas() {
    const filePath = path.join("../data/tarefas.json");

    if (!existsSync(filePath)) {
        writeFileSync(filePath, JSON.stringify([], null, 2), "utf-8"); 
    } //Caso o arquivo não exista, será criado um no caminho designado

    const data = readFileSync(filePath, { encoding: "utf-8" }); //Lê o arquivo e aramzena em data
    const parsed = JSON.parse(data); //Transforma o conteúdo json em um objeto javascript
}
