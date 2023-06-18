const ActorCard = ({ actor }) => {
  const { profile_path, name, character } = actor;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(profile_path);
  const defaultImg =
    'https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif';

  return (
    <li>
      <img src={profile_path ? imgUrl : defaultImg} alt={name} width="200px" />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};

export default ActorCard;
