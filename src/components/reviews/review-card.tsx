import {Review} from '../../types/review';
import {formatDate} from '../../utils/utils';
import {useMemo} from 'react';

type ReviewProps = {
  review: Review;
}
export function ReviewCard({review}:ReviewProps){
  const formattedReviewDate = useMemo(() => formatDate(review.date), [review]);
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{review.user}</cite>
          <time className="review__date" dateTime={review.date}>{formattedReviewDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
