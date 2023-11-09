import {Review} from '../../types/review';

type ReviewProps = {
  review: Review;
}
export function ReviewCard({review}:ReviewProps){
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}
        </p>

        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={review.date}>{formatDate(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}
