//STEP 1
// let movies = ["Lord of the Rings", "A Few Good Men", "Inception", "Terminator 2", "Behind Enemy Lines"];
// console.log(movies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";

// movies.splice(2, 0, "Taken");
// console.log(movies.length);

//STEP 4
// let movies = [];
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = [];
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// movies[5] = "Taken";
// movies[6] = "Event Horizon";

// for (let index in movies) {
//     console.log(movies[index]);
// }

//STEP 6
// let movies = [];
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// movies[5] = "Taken";
// movies[6] = "Event Horizon";

// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 7
// let movies = [];
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// movies[5] = "Taken";
// movies[6] = "Event Horizon";
// movies.sort();

// for (let movie of movies) {
//   console.log(movie);
// }

//STEP 8
// let movies = [];
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// movies[5] = "Taken";
// movies[6] = "Event Horizon";

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Speed 2";
// leastFavMovies[2] = "Riddick";

// console.log("Movies I like:\n\n");
// for (let movie of movies) {
//   console.log(movie);
// }

// console.log("\nMovies I regret watching:\n\n");
// for (let movie of leastFavMovies) {
//   console.log(movie);
// }

//STEP 9
// let movies = [];
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// movies[5] = "Taken";
// movies[6] = "Event Horizon";

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Speed 2";
// leastFavMovies[2] = "Riddick";

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();
// movies.forEach(movie => console.log(movie));

//STEP 10
// let movies = [];
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// movies[5] = "Taken";
// movies[6] = "Event Horizon";

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Speed 2";
// leastFavMovies[2] = "Riddick";

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// let lastMovie = movies.pop();
// console.log(lastMovie);

//STEP 11
// let movies = [];
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// movies[5] = "Taken";
// movies[6] = "Event Horizon";

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Speed 2";
// leastFavMovies[2] = "Riddick";

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// let lastMovie = movies.shift();
// console.log(lastMovie);

//STEP 12
// let movies = [];
// movies[0] = "Lord of the Rings";
// movies[1] = "A Few Good Men";
// movies[2] = "Inception";
// movies[3] = "Terminator 2";
// movies[4] = "Behind Enemy Lines";
// movies[5] = "Taken";
// movies[6] = "Event Horizon";

// let leastFavMovies = [];
// leastFavMovies[0] = "Transformers";
// leastFavMovies[1] = "Speed 2";
// leastFavMovies[2] = "Riddick";

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// let indices = leastFavMovies.map(function(movie) {
//     return movies.indexOf(movie);
// });

// movies = movies.filter(function(movie) {
//     return !leastFavMovies.includes(movie);
// });
  
// movies.splice(indices[0], 0, "Spiderman");
// movies.splice(indices[1], 0, "Iron Man");
// movies.splice(indices[2], 0, "Captain America");
  
// console.log(movies);

//STEP 13
// let movies = [["Lord of the Rings", 1], ["A Few Good Men", 2], ["Inception", 3], ["Terminator 2", 4], ["Behind Enemy Lines", 5]];

// let movieNames = movies.filter(function(movie) {
//   return typeof movie[0] === "string";
// });

// for (let i = 0; i < movieNames.length; i++) {
//   console.log(movieNames[i][0]);
// }

//STEP 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// let showEmployee = function(employee) {
//   console.log("Employees:\n\n");
//   for(let i = 0; i < employee.length; i++) {
//     console.log(employee[i]);
//   }
// };

// showEmployee(employees);

//STEP 15
  
//STEP 16

//STEP 17