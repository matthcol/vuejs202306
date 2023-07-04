
import type { Movie } from "./Movie"

export default class MovieCollection {

    movies: Movie[];


    constructor(...movies: Movie[]) {
        this.movies = [];
        this.movies.push(...movies);
    }

    debug(){
        console.log("Movies: ", this.movies.length, this.movies)
    }

}