let calculateSupply = function (age, amountPerDay) {
    let maxAge = 100;
    let totalNeeded = (amountPerDay * 365) * (maxAge - age);
    let message = ("You will need " + totalNeeded + " cups of tea to last you until the ripe old age of " + Math.round(maxAge) + "!");
    console.log(message);
}

calculateSupply(29.5, 1.2);
calculateSupply(62, 1);
calculateSupply(3, 0);