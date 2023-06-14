import React, {FC, useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { list } from "../src/dummy/list.json"

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

const NowPlaying: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/now_playing',
        {
          params: {
            api_key: '08a0b44e9f10080c51940bf08e128693',
            language: 'en-US',
            page: 1,
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
        {list ? (
          movies.map((movie) => (
            <Card
              key={movie.id}
              id="list"
              image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              title={movie.title}
              description={movie.overview}
            />
          ))
        ) : (
          undefined
        )}
      </div>
    </div>
  );
};

export default NowPlaying;