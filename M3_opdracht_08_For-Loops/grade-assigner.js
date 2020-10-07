// The Grade Assigner

function assignGrade(i) {
    if (i > 90) {
        return 'A';
    } else if (i > 80) {
        return 'B';
    } else if (i > 70) {
        return 'C';
    } else if (i > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (i = 60; i <= 100; i++) {
    console.log("Voor " + i + " punten, krijg je aan " + assignGrade(i) + ".");
} if (o = 20) {
    console.log("");
    console.log("Voor " + (i = 91) + " punten, krijg je een " + assignGrade(i) + ".");
}

