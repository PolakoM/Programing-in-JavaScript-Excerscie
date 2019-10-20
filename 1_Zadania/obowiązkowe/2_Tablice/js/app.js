//zad2
// const tab=["apple","blueberry","peach","pear"];

// console.log(tab[0]);
// console.log(tab[tab.length - 1]);

// for(i=0;i<tab.length;i++){
//     console.log(tab[i]);
// }


//zad3
// function printTable(array){
//     for(i=0; i<array.length; i++){
//         console.log(array[i])
//     }
// }
// printTable([1,2,3,4]);


//zad4
// function multiply(array) {
//     let sum = 1; 
//     for(let i=0; i<array.length; i++) {
//         sum*=array[i];

//     }
//     console.log(sum);
//     return sum;

// }
// multiply([1,2,3,4,5,6,7]);
// multiply([1,1,1,1,1]);
// multiply([2,8,3,7]);

//zad5 źle
// function getEvenAverage(array){
//     let evenSum = 0;
//     let evenCounter = 0;
//     for(i=0;i < array.length; i++)

//     console.log()
// }
// getEvenAverage([1,2,3,4,5,6,7]);
// getEvenAverage([1,1,1,1]);
// getEvenAverage([2,8,3,7,4]);


// zad6
function sortArray(array){
    array.sort((a,b) => a-b);
    console.log(array);
    return array;
}

sortArray([145,11,3,64,4,6,10]);

//zad7

function addArrays(array1, array2){
    const t3 = [];
    let lT = array1;
    let sT = array2;
    if(array1.length < array2.length){
        lT = array2;
        sT = array1;
    }

    for(let i = 0; i < lT.length; i++){
        if(i < sT.length){
            t3.p(sT[i] + )
        }else
        t3.p(lT[i])
    }

}