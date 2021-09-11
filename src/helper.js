export function calcularRestante(presupuesto, restante){
    let clase; 

    if((presupuesto / 4) > restante){
        clase = 'ultimo'
    }else if((presupuesto / 2) > restante){
        clase = 'mitad'
    }else{
        clase = 'total'
    }

    return clase;
}