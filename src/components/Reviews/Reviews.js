import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'sevices/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsById(movieId).then(response => setReviews(response.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.map(review => {
        const { author, content, id } = review;

        return (
          <li key={id}>
            <p>Author:{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
