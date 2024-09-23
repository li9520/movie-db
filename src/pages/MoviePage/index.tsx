import { FC, useEffect, useState } from 'react';
import { Movie } from 'entities/movie';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './movie-page.module.css';
import { MovieService } from '../../api';

interface MoviePageProps {
  serverData?: Movie
}

export const MoviePage: FC<MoviePageProps> = ({ serverData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<Movie>(serverData);

  useEffect(() => {
    if (serverData) return;
    (async() => {
      const data = await MovieService.getMovie(id);
      setData(data);
    })()
  }, []);
  
  

  return (
    data && <div>
      <button
        className={styles.button} 
        onClick={() => navigate(`/`)}
      >
        Вернуться к списку
      </button>
      <h1>{data.title}</h1>
      <div className={styles.subtitle}>
        {data.year}, {data.country}, {data.genre}
      </div>
      <img src={data.poster} alt="poster"/>
      <div className={styles.description}>{data.plot}</div>
    </div>
  );
};
