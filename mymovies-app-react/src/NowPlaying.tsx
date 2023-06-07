import { Component } from 'react'
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

interface NowPlayingMoviesState {
  movies: Movie[];
}

class NowPlaying extends Component<NowPlayingMoviesState> {
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
      <Navbar />
       <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
        {list ?
         movies.map((movie) => {
           return (
             <Card 
               key={movie.id}
               id="list"
               image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
               title={movie.title}
               description={movie.overview}
             />
           );
         }) : undefined}
       </div>
     </div>
  )

    // return (
    //   <div>
    //     <h2>Now Playing Movies</h2>
    //     <ul>
    //       {movies.map((movie) => (
    //         <li key={movie.id}>
    //           <img
    //             src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
    //             alt={movie.title}
    //           />
    //           <span>{movie.title}</span>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
  }
}

// class NowPlaying extends Component {
//   render() {
//     return (
//       <div>
//       {/* Other components */}
//       <NowPlayingMovies />
//       </div>

//       //   <div>
//       //   <Navbar />
//       //    <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
//       //     {list ?
//       //      list.map((item, index) => {
//       //        return (
//       //          <Card 
//       //            key={index}
//       //            id="list"
//       //            image={item.image}
//       //            title={item.title}
//       //            description={item.description}
//       //          />
//       //        );
//       //      }) : undefined}
//       //    </div>
//       //  </div>
//     )
//   }
// }
export default NowPlaying;