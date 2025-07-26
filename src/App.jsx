import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWY4NTc1ZWEzZTFlZjk2MWVhMDJhZTRhN2M3NGRkMiIsIm5iZiI6MTc1MjQ4MjU3MS40LCJzdWIiOiI2ODc0YzMwYjVhM2M0MGM2MDA1NDJhZTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TLrUTsT5ysGH8aWcm9j6oqrK8dDDRSTiJDiqdeLfr1A`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className=" bg-black pb-10 ">
        <Header />
        <Banner />
        <MovieList title={`Phim Hot`} data={movie} />
        <MovieList title={`Phim Đề Cử`} data={movieRate} />
      </div>
    </>
  );
}

export default App;
