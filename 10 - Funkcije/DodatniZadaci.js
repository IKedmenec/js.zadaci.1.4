var myNiz = ['ime', 'prezime', 'godine', 'broj cipela', 'itd'];

function pronadjiNajduzuRijec(niz) {
    let najduzaRijec = '';
    let duljina = 0;
    for (var ime of niz) {
        if (ime.length > duljina) {
            duljina = ime.length;
            najduzaRijec = ime;
        }
    }
    return najduzaRijec;
}

// 2
var najduzaRijec = pronadjiNajduzuRijec(myNiz);
// 3
console.log('najduza rijec: ' + najduzaRijec);


// dodatni zadaci

function getMax(a, b) {
    let retVal;

    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'nisu svi parametri brojevi';
    }
    /*
    if (a === b) {
        return a; // varti prvi, odnosno "a"
    }
    if (a > b) {
        return a;
    }
    return b;
*/

    if (a > b) {
        retVal = a;
    } else if (b > a) {
        retVal = b;
    } else if (a === b) {
        retVal = a; // varti prvi, odnosno "a"
    }
    return retVal;
}

console.log('Veći broj je: ' + getMax('a', -25));

function sumiraj(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'error';
    }
    return a + b;
}

console.log(sumiraj(2, 3));
console.log(sumiraj('2', 3));

var prvi = sumiraj(3, 3);
var drugi = sumiraj(5, 5);
if (prvi !== 'error' && drugi !== 'error') {
    var dvaPutaSuma = prvi * drugi;
    console.log(dvaPutaSuma);
} else {
    console.log('ne mogu ti izračunati');
}

function pomnozi(a, b) {
    return a * b;
}

var izracun = pomnozi((pomnozi(2, 3) * pomnozi(8, 9)) / pomnozi(2, 2), 4);

console.log(izracun);

function podijeli(a, b) {
    if (b == 0) {
        console.log('dijeljenje s nulom nije definirano');
        return 'error';
    }
    return a / b;
}

var dijeljeno = podijeli(12, 0);
console.log('rezultat dijeljenja: ' + dijeljeno);
