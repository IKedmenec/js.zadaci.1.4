var names = ['John', 'Jane', 'Bob', , 'Mike'];
/*
1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
2. Dodajte svoje ime na kraj niza.
3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

5. sortirajte niz abecedno
6. ispišite ga
*/

//1
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 1.1
for (var myName of names) {
    console.log(myName);
}

//2 --> u ovom slučaju moramo znati da ćemo postaviti ime na index 5
//names[5] = 'Goran';
//2.1 --> u ovom slučaju stavljamo na najveći mogući index na definiranom nizu (names.length = 5)
//names[names.length] = 'Goran';
// 2.2 --> koristimo funkciju koja stavlja na kraj niza
names.push('Goran');

//3
for (var myName of names) {
    console.log(myName);
    if (myName === 'Jane') {
        break;
    }
}
// 4
var noviNiz = [];
for (var myName of names) {
    if (myName === undefined) {
        continue;
    }
    noviNiz.push(myName);
}
console.log(noviNiz.join());
// 4.2
for (var i = 0; i < names.length; i++) {
    if (names[i] === undefined) {
        names.splice(i, 1);
    }
}

console.log('spliced --> ' + names.join());

//5
names.sort();
//6
console.log(names.join());


