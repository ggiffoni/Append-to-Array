//ADICIONANDO ELEMENTOS NA LISTA E NO VETOR:

let vetor = [];

add = () => {
    let template = vetor.map(valor => `<li>${valor}</li>`).join(`\n`);
    document.querySelector("ul").innerHTML = template;
    document.getElementById("vet").innerHTML = vetor;
}

function ADD_AUX(){
    let input = document.querySelector("input");
    vetor.push(input.value);
    input.value = "";
    add();

}
////////////////////////////////////////////////////////////////

//ORDENAÇÃO BUBBLE SORT:

bubble_sort = (vetor) => {

    for (i=0; i< vetor.length-1; i++){
        for (j=0; j<((vetor.length-1)-i); j++){
            if (vetor[j] > vetor[j+1]){
                temp = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = temp;
            }
        }
    }
    
} 

function BS (){

    document.getElementById("vet2").innerHTML = bubble_sort(vetor);

}
//////////////////////////////////////////////////////////////////

//ORDENAÇÃO SELECTION SORT.

selection_sort = (vetor) => {
    let vetor_ordenado = vetor.sort((a, b) => a - b);
    return vetor_ordenado

}

function SS(){
    document.getElementById("vet2").innerHTML = selection_sort(vetor);

};
//////////////////////////////////////////////////////////////////

//ORDENAÇÃO QUICK SORT.

quick_sort = (vetor) => {
    if (vetor.length === 0) return [];
    if (vetor.length === 1) return vetor;

    let pivot = vetor[0];

    let parte_1 = vetor.filter( n => n < pivot);
    let parte_2 = vetor.filter(n => n === pivot);
    let parte_3 = vetor.filter( n => n > pivot);

    return quick_sort(parte_1).concat(parte_2).concat(quick_sort(parte_3));
    
}

function QS(){
    document.getElementById("vet2").innerHTML = quick_sort(vetor);

}
/////////////////////////////////////////////////////////////////////

//ALGORÍTIMOS PARA EMBARALHAR O VETOR:

swap = (vetor, i, j) => {
    a = vetor[i];
    b = vetor[j]
    vetor[i] = vetor[j]
    vetor[j] = a;

    return vetor
}

shuffle_1 = (vetor) => {
    let vetor_embaralhado = [...vetor];
    let indice = vetor_embaralhado.length;
    let indice_embaralhado;
    while(indice!=0) {
        indice_embaralhado = Math.floor(Math.random() * indice);
        indice -= 1;
        [vetor_embaralhado[indice], vetor_embaralhado[indice_embaralhado]] = 
        [vetor_embaralhado[indice_embaralhado], vetor_embaralhado[indice]]
    }
    return vetor_embaralhado
}

shuffle_2 = (vetor) => {
    let vetor_embaralhado = vetor.sort((a, b) => Math.random() - 0.5);
    return vetor_embaralhado

}
