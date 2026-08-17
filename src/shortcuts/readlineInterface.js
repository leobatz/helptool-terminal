import readline from 'readline';

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export default terminal;