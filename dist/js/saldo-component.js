let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
// opção ao "as HTMLElement" acima para resolver o erro de null do TS.
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
