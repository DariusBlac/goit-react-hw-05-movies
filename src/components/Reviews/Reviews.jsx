import { searchMoviesReviews } from 'helpers/api';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  const fetchMovieReviews = useCallback(async () => {
    try {
      const { results } = await searchMoviesReviews(movieId);
      setReviews(results);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieReviews();
  }, [fetchMovieReviews]);

  return (
    <>
      {reviews && reviews.length < 1 && (
        <div>We don't have ani reviews for this movie.</div>
      )}
      <ul>
        {reviews &&
          reviews.map(el => {
            return (
              <li key={el.id}>
                <h3>Author: {el.author}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Reviews;
