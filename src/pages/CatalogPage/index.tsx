import { FC, useEffect, useState } from 'react';
import { CardList } from 'src/components';
import { Movie } from 'entities/movie';
import { MovieService } from 'src/api';

interface CatalogPageProps {
  serverData?: Movie[];
}

export const CatalogPage: FC<CatalogPageProps> = ({ serverData }) => {
  const [data, setData] = useState(serverData);
  useEffect(() => {
    if (serverData) return;
    (async() => {
      const data = await MovieService.getMovies();
      setData(data);
    })()
  }, [])

  return (
    data && <>
      <h1>Movies:</h1>
      <CardList movies={data}/>
    </>
  );
};
