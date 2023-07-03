
import { Component, Vue } from 'vue-facing-decorator'
import type { Movie } from "./Movie"

@Component({})
export default class MovieCollection extends Vue {

    movies: Movie[] = [];

}