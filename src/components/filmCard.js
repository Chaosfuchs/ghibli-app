import styled from 'styled-components';
import useFetch from '../hooks/fetch';

export default function FilmCard() {
  const { data, error } = useFetch('https://ghibliapi.herokuapp.com/films');

  return (
    <div>
      {error && <div>{error.message}</div>}
      {data?.map(film => (
        <StyledCard key={film.id}>
          <ul>
            <li>Filmtitle: {film.title}</li>
            <li>Original Title: {film.original_title}</li>
            <li>Director: {film.director}</li>
            <li>Producer: {film.producer}</li>
            <li>Release Date: {film.release_date}</li>
            <li>Running Time: {film.running_time} Minutes</li>
          </ul>
          <img src={film.image} />
        </StyledCard>
      ))}
    </div>
  );
}

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: beige;
  max-width: 500px;
  text-align: left;
  list-style-type: none;

  img {
    padding: 10px;
    width: 150px;
  }
`;
