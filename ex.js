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



selection_sort = (vetor) => {
    let vetor_ordenado = vetor.sort((a, b) => a - b);
    return vetor_ordenado

}    

let vetor = [9, 3, 4, 70, 2];

let a = selection_sort(vetor);

console.log(a);
