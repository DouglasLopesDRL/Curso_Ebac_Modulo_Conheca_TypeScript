function multiplicaNúmeros (num1: number, num2: number): number{
    return num1 * num2;
}

function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

const resultado = multiplicaNúmeros(5, 10);
const mensagem = saudacao("João");
console.log(`Resultado da multiplicação: ${resultado}`);
console.log(mensagem);