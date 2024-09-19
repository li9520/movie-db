import { FC, useEffect, useState } from 'react';
import { CardList } from '../../components';
import { Movie } from '../../entities/movie';
import { MovieService } from '../../api';

interface CatalogPageProps {
  serverData?: Movie[];
}

export const CatalogPage: FC<CatalogPageProps> = ({ serverData }) => {
  const [data, setData] = useState(serverData);
  const [isLoading, setLoading] = useState(serverData ? false : true);
  useEffect(() => {
    if (!isLoading) return;
    (async() => {
      const data = await MovieService.getMovies();
      setData(data);
      setLoading(false);
    })()
  }, [])

  if (isLoading) return (
    <div>Loading...</div>
  )
  return (
    <>
      <h1>Movies:</h1>
      <CardList movies={data}/>
    </>
  );
};
