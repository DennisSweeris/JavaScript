// Deel A: Schrijf je eerste functie

// makeSandwich
// Add 1 slice of bread
// Add topping01
// Add topping02
// Add sauce
// Add 1 slice of bread

/* function makeSandwich() {
    console.log("Choose a bread");
    console.log("Add toppings");
    console.log("Add sauce");
}

makeSandwich(); */

// Deel B: Schrijf een functie met een argument

// declare function
/* function makeSandwich(topping) {
    console.log("There you go, a sandwich with " + topping);
} */

// call lettuce sandwich
/* makeSandwich("lettuce");
makeSandwich("bacon"); */

// Deel C: gebruike en return statement

// Declare
/* function calculateDiscountedPrice(totalAmount, discount) {
    return Math.round(totalAmount - totalAmount * (discount / 100));
} */

// Call
// console.log("That'll be €" + calculateDiscountedPrice(100, 5) + ",- including discount please.");

// Deel D: gebruik meerdere return statements
// **************

function calculateDiscountedPrice(totalAmount, discount) {
    return Math.round(totalAmount - totalAmount * (discount / 100));
};


function calculateIfPriceIs(totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - totalAmount * (discount / 100));
    } else {
        return totalAmount;
    }
}
console.log(calculateDiscountedPrice(70, 2.5));
console.log(calculateIfPriceIs(10, 2.5));