function multiplicaNúmeros (num1: number, num2: number): number{
    return num1 * num2;
}

function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

const resultadoMultiplicacao: number = multiplicaNúmeros(2.5, 3.2);
const mensagemSaudacao: string = saudacao("Douglas");
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
console.log(mensagemSaudacao);