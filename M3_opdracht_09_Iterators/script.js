// While Loop
// const colors = ["yellow", "blue", "red", "orange"];

// let i = 0;
// while (i < colors.length) {
//     console.log(colors[i]);
//     i++;
// }

// For loop
// const colors = ["yellow", "blue", "red", "orange"];

// for (i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// Array Method
// const colors = ["yellow", "blue", "red", "orange"];
// colors.forEach(element => console.log(element));

// For each
// const colors = ["yellow", "blue", "red", "orange"];
// colors.forEach(element => console.log(element));

// Hoeveel regels neemt mijn while loop in beslag? 4
// Hoeveel regels neemt mijn for loop in beslag? 2
// Hoeveel regels neemt mijn forEach method in beslag? 1

// Welke voordelen heeft het gebruiken van een array method nog meer
// t.o.v. een for of een while loop?
// Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// - De forEach-methode vind ik makkelijker leesbaar
// - De for loop zou ik gebruiken als de array een onbekende lengte heeft
// - De while loop als je naar iets specifieks op zoek bent

// Looping through the properties of an object.
const object = { Naam: "Dennis", Leeftijd: 29, Afkomst: "Nederland", Energie: "Varierend", Favoriete_nummer: 42 };

for (const property in object) {
    // console.log(`${property}: ${object[property]}`);
    console.log(`${property}: ${object[property]}`);
}

// Ben je nu aan het itereren?
// Ja, want er word elke keer een andere naam aan de $(property) variable
// gegeven per iteratie.
