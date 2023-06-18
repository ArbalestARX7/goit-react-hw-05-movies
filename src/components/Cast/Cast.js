import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'sevices/api';
import ActorCard from '../ActorCard/ActorCard';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastById(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul className={css.actorsList}>
      {cast.map(actor => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </ul>
  );
};

export default Cast;
