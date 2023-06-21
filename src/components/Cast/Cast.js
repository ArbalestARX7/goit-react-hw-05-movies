import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'sevices/api';
import ActorCard from '../ActorCard/ActorCard';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [emptyCast, setEmptyCast] = useState(false);

  const showedCast = showMoreBtn ? cast : cast.slice(0, 5);

  useEffect(() => {
    getCastById(movieId)
      .then(({ cast }) => {
        setCast(cast);
        if (cast.length === 0) {
          setEmptyCast(true);
        }
      })
      .catch(error => console.log(error));
  }, [movieId]);

  const onShowMore = e => {
    e.preventDefault();
    setShowMoreBtn(!showMoreBtn);
  };

  return (
    <>
      {emptyCast && <div className={css.oops}>Oops, empty cast</div>}

      <ul className={css.actorsList}>
        {showedCast.map(actor => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
        {cast.length > 6 && (
          <button
            type="button"
            className={css.showMoreBtn}
            onClick={onShowMore}
          >
            {showMoreBtn ? 'Show Less' : 'Show More'}
          </button>
        )}
      </ul>
    </>
  );
};

export default Cast;
