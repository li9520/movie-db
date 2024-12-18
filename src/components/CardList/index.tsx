import { FC } from 'react';
import { Movie } from 'entities/movie';
import styles from './card-list.module.css';
import { Card } from '../Card';
import { useNavigate } from 'react-router-dom';

interface CardListProps {
  movies: Movie[];
}

export const CardList: FC<CardListProps> = ({ movies = []  }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.list}>
      {movies.map((movie) => 
        <Card 
          key={movie.id} 
          movie={movie} 
          onClick={() => navigate(`/movie/${movie.id}`)}
        />)}
    </div>
  );
};
