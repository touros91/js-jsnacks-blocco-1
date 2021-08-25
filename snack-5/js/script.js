// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array


// creo un array vuoto chiamato dispari

var dispari = [];

// chiedo all'utente per 6 volte di inserire un numero, se è dispari lo inserisco dentro l'array

for (var i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Inserisci un numero"));
    if ((numero%2) == 1) {
        dispari.push(numero);
    }
}
