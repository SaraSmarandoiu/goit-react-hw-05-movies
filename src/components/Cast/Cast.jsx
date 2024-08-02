import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(setCast)
      .catch(error => {
        console.error('Error fetching movie credits:', error);
      });
  }, [movieId]);

  return (
    <div className={styles.cast}>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
