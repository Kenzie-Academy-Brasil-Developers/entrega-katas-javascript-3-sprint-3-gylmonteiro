function showResults (arg,kata) {
    const local = document.getElementById("d1");
    const elemento = document.createElement('p');
    let conteudo = document.createTextNode(arg);
    const titulo = document.createElement("h1");
    const text = document.createTextNode(kata)
    titulo.appendChild(text);
    local.appendChild(titulo)
    elemento.appendChild(conteudo);
    local.appendChild(elemento);
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    // implemente o código do kata 1 aqui
    let newArray = [];
    for (let i = 1; i <= 25; i++) {
       newArray.push(i);
    }
    showResults(newArray, "kata1: Exibir os números de 1 a 25:");
    return newArray;
}
 kata1();

function kata2() {
    // implemente o código do kata 2 aqui
    let newArray = [];
    for (let i = 25; i >= 1; i--) {
        newArray.push(i);
    }
    showResults(newArray, "kata2: Exibir os números de 25 a 1:");
    return newArray;
}
kata2();

function kata3() {
    // implemente o código do kata 3 aqui
    let newArray = [];
    for (let i = 1; i <= 25; i++) {
        newArray.push(i * -1);
    }
    showResults(newArray, "kata3: Exibir os números de -1 a -25:");
    return newArray;
}
kata3();

function kata4() {
    // implemente o código do kata 4 aqui
    let newArray = [];
    for (let i = 25; i >= 1; i--) {
        newArray.push(i * -1);
    }
    showResults(newArray, "kata4: Exibir os números de -25 a -1:");
    return newArray;
}
kata4();

function kata5() {
    // implemente o código do kata 5 aqui
    let newArray = [];
    for (let i = 25; i >= -25; i-- ) {
        if (i % 2 !==0) {
            newArray.push (i);
        }
    }
    showResults(newArray, "kata5: Exibir os números ímpares de 25 a -25: ");
    return newArray;
}
kata5();

function kata6() {
    // implemente o código do kata 6 aqui
    let newArray = [];
    for (let i = 3; i <= 100; i++) {
        if (i % 3 === 0) {
            newArray.push (i);
        }
    }
    showResults(newArray, "kata6: Exibir os números divisíveis por 3 até o 100");
    return newArray;
}
kata6();

function kata7() {
    // implemente o código do kata 7 aqui
    let newArray = [];
    for (let i = 7; i <= 100 ; i++) {
        if (i % 7 === 0) {
            newArray.push (i);
        }
    }
    showResults(newArray, "kata7: Exibir os números divisíveis por 7 até o 100:");
    return newArray;
}
kata7();

function kata8() {
    // implemente o código do kata 8 aqui
    let newArray = [];
    for (let i = 100; i >= 3; i--) {
        if (i % 3 === 0 || i % 7===0) {
            newArray.push (i);
        }
    }
    showResults(newArray, "kata8: Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100");
    return newArray;

}
kata8();

function kata9() {
    // implemente o código do kata 9 aqui
    let newArray = [];
     for (let i = 5; i <= 100; i+=10) {
        if(i % 2 !==0 && i % 5 === 0) {
            newArray.push (i);
        }
     }
     showResults(newArray, "kata9: Exibir os números ímpares divisíveis por 5 até o 100: ");
     return newArray;

}
kata9();


function kata10() {
    // implemente o código do kata 10 aqui
    let newArray = [];
    for (let i = 0; i < sampleArray.length; i++) {
        newArray.push(sampleArray[i]);
    }
    showResults(newArray, "kata10: Exibir os 20 elementos de sampleArray.");
    return newArray;
}
kata10();

function kata11() {
    // implemente o código do kata 11 aqui
    let newArray = [];
    for (let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 2 === 0) {
            newArray.push (sampleArray[i]);
        }
    }
    showResults(newArray, "kata11: Exibir todos os números pares contidos em sampleArray.");
    return newArray;
}
kata11();

function kata12() {
    // implemente o código do kata 12 aqui
    let newArray = [];
    for (let i = 0;  i < sampleArray.length; i++) {
        if(sampleArray[i] % 2 !== 0) {
            newArray.push (sampleArray[i]);
        }
    }
    showResults(newArray, "kata12: Exibir todos os números ímpares contidos em sampleArray.");
    return newArray;
}
kata12();

function kata13() {
    // implemente o código do kata 13 aqui
    let newArray = [];
    for (let i = 0; i < sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0) {
            newArray.push (sampleArray[i]);
        }
    }
    showResults(newArray, "kata13: Exibir os números divisíveis por 8 em sampleArray: ");
    return newArray;
}
kata13();

function kata14() {
    // implemente o código do kata 14 aqui
    let newArray = [];
    for (let i = 0; i < sampleArray.length; i++) {
        newArray.push(sampleArray[i] ** 2);
    }
    showResults(newArray, "kata14: Exibir o quadrado de cada elemento de sampleArray. ");
    return newArray;
}
kata14();

function kata15() {
    // implemente o código do kata 15 aqui
    
    let acumulador = 0;
    for (let i = 1; i <= 20; i++) {
        acumulador += i;
    }
    showResults(acumulador, "kata15: Exibir a soma de todos os números de 1 a 20.");
    return acumulador;
}

kata15();

function kata16() {
    // implemente o código do kata 16 aqui
    let acumulador = 0;
    for (let i = 0; i < sampleArray.length; i++ ){
        acumulador += sampleArray[i];
    }
    showResults(acumulador, "kata16: Exibir a soma de todos os elementos de sampleArray");
    return acumulador;
}
kata16();

function kata17() {
    

    // implemente o código do kata 17 aqui
    let armazenarMenor = sampleArray[0];
    for (let i = 0 ; i < sampleArray.length; i++) {
        if(sampleArray[i] < armazenarMenor  ) {
            armazenarMenor = sampleArray[i];
        }
    }
    showResults(armazenarMenor, "kata17: Exibir o menor elemento de sampleArray.");
    return armazenarMenor
}
kata17();

function kata18() {
    // implemente o código do kata 18 aqui
    let armazenarMaior = sampleArray[0];
    for (let i = 0; i < sampleArray.length; i++ ){
        if (sampleArray[i] > armazenarMaior) {
            armazenarMaior = sampleArray[i];
        }
    }
    showResults(armazenarMaior, "kata8: Exibir o maior elemento de sampleArray.");
    return armazenarMaior;
}
kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
