const moviesJson = require("./movies.json");
class MovieAPI {
  constructor(movies) {
    this.movies = movies.map(this.addRatingAndId);;
  }

  addRatingAndId(movie, i) {
    return {
      ...movie,
      id: i,
      rating: Math.floor(Math.random() * 5) + 1
    }
  }

  // 2. A method that returns movies from a certain genre.
  getAllGenre(genre) {
    const moviesByGenre = this.movies.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
    return moviesByGenre;
  }

  // 3. A method that removes a movie with a certain id (if found).
  deleteMovieById(id) {
    const moviesById = this.movies.filter((movie) => movie.id !== id);
    this.movies = moviesById;
  }

  // 4. A method that returns the movies with the subtitle and thumb properties filtered out.
  deleteSubtitleAndThumb() {
    const moviesNoSubtitle = this.movies.map(
      ({ description, sources, title, genre, rating, id }) => ({
        description,
        sources,
        title,
        genre,
        rating,
        id,
      })
    );
    return moviesNoSubtitle;
  }

  //  5. A method that returns the movies sorted by name.
  sortMoviesByTitle() {
    const sortMovie = this.movies.sort((a, b) => {
      return a.title - b.title;
    });
    return sortMovie;
  }

  // 6. A method that returns the 2 top rated movies and 2 bottom rated movies.
  getRatedMovies() {
    const sortedMovie = this.sortByRating();
    const topBottomMovie = [
      sortedMovie[sortedMovie.length - 1],
      sortedMovie[sortedMovie.length - 2],
      sortedMovie[1],
      sortedMovie[0],
    ];
    return topBottomMovie;
  }

  //  7. A method that prints out the three top rated movies.
  topThreeMovies() {
    const sortMovies = this.sortByRating();
    console.log(sortMovies.slice(sortMovies.length - 3));
  }

  // 8. A method that prints out movies sorted from bottom rated to top rated.
  printSortMoviesByRating() {
    console.log(this.sortByRating());
  }

  sortByRating() {
    const sortMovieRate = [...this.movies].sort((a, b) => {
      return a.rating - b.rating;
    });

    return sortMovieRate;
  }

  //  9. A method that allows the user to add a new movie object to the movie list (supply all properties but the “id” and “rating”.
  // The “id” and “rating” properties should be added internally by the method.

  addMovie(description, sources, subtitle, thumb, title, genre) {
    const movie = {description, sources, subtitle, thumb, title, genre};
    this.movies.push(this.addRatingAndId(movie, this.movies.length));
  }

  // 10. A method that returns a movie with a certain id (if found).
  returnMovieById(id) {
    return this.movies.filter((movie) => movie.id === id);
  }
  // 11. A method that changes the title of a movie with a certain id (if found).
  //The updated title should be sent in as an argument to the method.
  changeTitle (id, title){
    this.movies.forEach(movie => {
      if(movie.id === id){
        movie.title = title;
      } 

    });
  }

  fetchAllMovies() {
    return this.movies;
  }
}

const API = new MovieAPI(moviesJson);

// const allMovies = API.fetchAllMovies();
// console.log(allMovies);

// API.deleteMovieById(3);
// console.log(API.fetchAllMovies());

// const moviesWithoutThumb = API.deleteSubtitleAndThumb();
// console.log(moviesWithoutThumb);

// API.sortMoviesByTitle();
// console.log(API.fetchAllMovies());
// API.getRatedMovies();

// const sortedByRating = API.sortByRating();
// console.log(sortedByRating);
// console.log(API.fetchAllMovies());

// // API.returnMovieById(3);
// console.log(API.getRatedMovies());

// API.topThreeMovies();

// API.addMovie("Carmela's movie", [
//   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
// ], "Pippa", "images/ForBiggerJoyrides.jpg", "Carmela Pippa", "Comedy");

// API. changeTitle (13, "Puzzetta")

// console.log(API.fetchAllMovies());
