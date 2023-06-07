import React, { Component } from 'react';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface NowPlayingMoviesState {
  movies: Movie[];
}

class NowPlayingMovies extends Component<NowPlayingMoviesState> {
  state: NowPlayingMoviesState = {
    movies: [],
  };


  componentDidMount() {
    this.fetchNowPlayingMovies();
  }

  fetchNowPlayingMovies = async () => {
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
      this.setState({ movies: response.data.results });
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  };

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h2>Now Playing Movies</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <span>{movie.title}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default NowPlayingMovies;