import PropTypes from 'prop-types';
import css from './ActorCard.module.css';

const ActorCard = ({ actor }) => {
  const { profile_path, name, character } = actor;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(profile_path);
  const defaultImg =
    'https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif';

  return (
    <li>
      <img src={profile_path ? imgUrl : defaultImg} alt={name} width="200px" />
      <p className={css.actorsInform}>{name}</p>
      <p className={css.actorsInform}>{character}</p>
    </li>
  );
};

export default ActorCard;

ActorCard.protoTypes = { actor: PropTypes.object.isRequired };
