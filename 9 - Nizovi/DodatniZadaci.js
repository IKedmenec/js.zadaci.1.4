
// dodatni zadaci


var brojcaniNiz = [1, 2, , 3, 4, , 5, 'test', [1, 2, 3], 6, 7, true];
// zbroji sve članove niza

var suma = 0;
for (var x = 0; x < brojcaniNiz.length; x++) {
    if (typeof brojcaniNiz[x] != 'number') {
        console.log(
            'Element na indexu ' +
                x +
                ' nije broj pa ga preskačemo nego je = ' +
                typeof brojcaniNiz[x],
        );
        continue;
    }
    suma += brojcaniNiz[x];
}

console.log('suma=' + suma);

var imena = ['prvo', 'drugo', 'trece'];
console.log(imena.join());
imena[1] = 'peto';
console.log(imena.join());

var elementi = ['Ime', 'prezime', 'godine'];
// Ime, prezime, godine
var ispisi = '';
for (var element of elementi) {
    ispisi += element + ',';
}
console.log(ispisi);

var elementiBr = [1, 2, 3];
ispisi = '';
for (var i = 0; i < elementiBr.length; i++) {
    if (i == elementiBr.length - 1) {
        ispisi += elementiBr[i];
        //    break;
    } else {
        ispisi += elementiBr[i] + ',';
    }
}
console.log(ispisi);

var namesLong = [
    'John',
    'Jane',
    'Donatello',
    'Bob',
    ,
    1,
    [2, 3, 4],
    'Mike',
    'Leonardo',
];
var duljina = 0;
var najduzeIme = '';
for (var ime of namesLong) {
    //console.log('Evaluiram Ime:' + ime);
    if (typeof ime !== 'string') {
        continue;
    }
    var duljinaImena = ime.length;
    if (duljinaImena > duljina) {
        duljina = duljinaImena;
        najduzeIme = ime;
    }
}
console.log('Duljina: ' + duljina);
console.log('Najduze ime je: ' + najduzeIme);
