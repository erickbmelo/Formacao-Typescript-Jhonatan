let valor = 15;
valor = "Cachorro"; // Dá erro pois o TS presume que se trata de variável numérica devido à primeira atribuição 15

let nome: string; // Declarando só o tipo sem inicializar

let qualquer1: any = "string"; // tipo Any aceita qualquer tipo e parseia automaticamente
qualquer1 = 22;

let qualquer2; // Sem declarar o tipo e sem inicializar, ele presume que se trata de tipo Any
