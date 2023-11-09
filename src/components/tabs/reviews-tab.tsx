import {Review} from '../../types/review';
import {ReviewCard} from '../reviews/review-card';

type ReviewsTabProps = {
  reviews: Array<Review>;
}
export function ReviewsTab({reviews}:ReviewsTabProps){
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <ReviewCard key={review.id} review={review}/>)}
      </div>
    </div>
  );
}
