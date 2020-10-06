const age = 26;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 55;

// age check
if (age >= 18) {
    console.log("Je mag naar binnen!");
} else {
    console.log("Je bent helaas te jong, blijft alsjeblieft buiten");
}

// gender check
if (isFemale) {
    console.log("Je bent een vrouw!");
} else {
    console.log("Je bent iets anders!");
}

// driver status check
if (driverStatus === "bob") {
    console.log("Jij mag veilig rijden");
} else {
    console.log("Jij mag niet meer rijden");
}

// korting check
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Jammer joh, geen korting!")
}

// name check
if (name === "Sarah" || name === "Bram") {
    console.log("Jij krijgt een gratis biertje!");
} else {
    console.log("Dat word betalen :)");
}

// Freebies
if (totalAmount > 25 && totalAmount < 50) {
    console.log("Jij krijgt gratis (vega)bitterballen");
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("Jij krijgt een gratis portie nachos");
} else if (totalAmount > 100) {
    console.log("Jij krijgt een gratis fles champagne");
} else {
    console.log("Alsjeblieft");
}

