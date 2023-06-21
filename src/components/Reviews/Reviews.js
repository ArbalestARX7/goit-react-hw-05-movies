import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'sevices/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [emptyReviews, setEmptyReviews] = useState(false);

  useEffect(() => {
    getReviewsById(movieId)
      .then(response => {
        setReviews(response.results);
        if (response.total_results === 0) {
          setEmptyReviews(true);
        }
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {emptyReviews && <div className={css.oops}>Oops, empty reviews</div>}
      <ul>
        {reviews.map(review => {
          const { author, content, id } = review;

          return (
            <li key={id} className={css.reviewItem}>
              <p className={css.author}>Author:{author}</p>
              <p className={css.content}>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
