import css from "./App.module.css";
import { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import { fetchMovie } from "../../services/movieService";
import MovieGrid from "../MovoeGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import type { Movie } from "../../types/movie";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (query: string) => { 
    try {
      setIsLoading(true);
      setIsError(false);
      setMovies([]);
      const data = await fetchMovie(query);

      if (data.length === 0) {
        console.log("0");
        return;
      }
      setMovies(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className={css.app}>
      {/* <SearchBar onSearch={() => { }}></SearchBar> */}
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      {movies.length>0 && <MovieGrid onSelect={()=>{}} movies={movies}/>}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  )
}