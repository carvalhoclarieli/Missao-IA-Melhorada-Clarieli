const nomes = ["Clarieli", "Claudia", "Odete", "Leticia", "Chrislane", "Djenifer", "Gabriely", "Pamela"];

export function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
} 

export const nome = aleatorio(nomes);