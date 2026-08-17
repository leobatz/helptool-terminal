export function perguntar(pergunta, terminal) {
    return new Promise((resolve) => {
        terminal.question(pergunta, resolve)
    })
}