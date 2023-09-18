// Tipos Primitivos
let valor = 15;
valor = "Cachorro"; // Dá erro pois o TS presume que se trata de variável numérica devido à primeira atribuição 15
let nome: string; // Declarando só o tipo sem inicializar
let qualquer1: any = "string"; // tipo Any aceita qualquer tipo e parseia automaticamente
qualquer1 = 22;
let qualquer2; // Sem declarar o tipo e sem inicializar, ele presume que se trata de tipo Any

// Arrays
const lista = []; // TS seta o tipo da array como Any
lista.push("Erick", "Árvore", 22, true, []);

const lista2: number[] = [];
lista2.push("Erick", "Árvore", 22, true, []); // Ao declarar array: number, alerta o erro no push com string

// Tipos Personalizados
type Transacao = {
    tipoTransacao: tipoTransacao;
    data: Date;
    valor: number;
}

// Enum
enum tipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao.DEPOSITO, // Aqui foi escolhido Depósito
    data: new Date(),
    valor: 0
}