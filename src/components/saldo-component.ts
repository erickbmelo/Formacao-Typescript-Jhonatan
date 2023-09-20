import { formatarMoeda } from "../utils/formatters.js";
import { formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";

let saldo:number = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
// opção ao "as HTMLElement" acima para resolver o erro de null do TS.
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

if (elementoDataAcesso != null){
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}