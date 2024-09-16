import { FC } from 'react';
import { Movie } from '../../entities/movie';
import styles from './card-list.module.css';
import { Card } from '../Card';

interface CardListProps {
  movies: Movie[];
}

export const CardList: FC<CardListProps> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.map((movie) => <Card key={movie.id} movie={movie} />)}
    </div>
  );
};
