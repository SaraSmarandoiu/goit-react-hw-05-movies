import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../api';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w300'; 

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        console.log('Fetched movie details:', data); 
        setMovie(data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.movieDetails}>
      <div className={styles.movieHeader}>
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className={styles.movieImage}
        />
        <div className={styles.movieInfo}>
          <h1>
            {movie.title} ({movie.release_date.split('-')[0]})
          </h1>
          <p>
            <strong>User Score:</strong> {movie.vote_average * 10}%
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <h3>Additional information</h3>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
