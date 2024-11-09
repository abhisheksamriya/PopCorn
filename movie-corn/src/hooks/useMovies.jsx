import { useState, useEffect } from "react";

const key = "270b166c";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      async function fetchMovies() {
        try {
          if (!query || query.length < 3) return;
          setIsloading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fatching movies");

          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movie not found");
          }
          setMovies(data.Search);
          setError("");
        } catch (err) {
          setError(err.message);
        } finally {
          setIsloading(false);
        }
      }
      fetchMovies();
    },
    [query]
  );
  return { movies, error, isLoading };
}
