const myFavMovie = {
    title: "Titanic",
    duration: 3,
    stars: ["Kate Winslet", "Leonardo DiCaprio", "Billy Zane", "Kathy Bates", "Frances Fisher"]
};

// const printMovie1 = function (movie) {
//     console.log(movie.title + " lasts for " + movie.duration + " minutes");
//     let starsString = "Stars: ";
//     for (let i = 0; i < movie.stars.length; i++) {
//         starsString += movie.stars[i];
//         if (i !== movie.stars.length - 1) {
//             starsString += ", ";
//         }
//     }
//     console.log(starsString);
// };

const printMovie2 = function (movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes");
    console.log("Stars: " + movie.stars.join(", "));
};

// printMovie1(myFavMovie);
printMovie2(myFavMovie);