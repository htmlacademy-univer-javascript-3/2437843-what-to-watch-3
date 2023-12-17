import {Review} from '../../../types/review';
import {ReviewCard} from '../../review-card/review-card';

type ReviewsTabProps = {
  reviews: Array<Review>;
}
export function ReviewsTab({reviews}:ReviewsTabProps){
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, (reviews.length + 1) / 2).map((review) => <ReviewCard key={review.id} review={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice((reviews.length + 1) / 2).map((review) => <ReviewCard key={review.id} review={review}/>)}
      </div>
    </div>
  );
}
