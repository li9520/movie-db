import { FC } from 'react';
import { Movie } from 'entities/movie';
import styles from './card.module.css'

interface CardProps {
  movie: Movie;
  onClick: VoidFunction;
}

export const Card: FC<CardProps> = ({ movie, onClick } ) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={movie.poster} alt="poster"/>
      <div className={styles.title}>{movie.title}</div>
      <div>{`${movie.year}, ${movie.genre[0]}`}</div>
      <div className={styles.rating}>{movie.rating}</div>
    </div>
  );
};