import { Review } from '../../types/review';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const sortedReviews = [...reviews];
  sortedReviews?.sort((reviewA, reviewB) => {
    if (reviewA.date !== reviewB.date) {
      return Date.parse(reviewB.date) - Date.parse(reviewA.date);
    }
    return 1;
  });
  const renderedReviews = sortedReviews.slice(0, 10);

  const reviewsList = renderedReviews.map((review) => <ReviewsItem key={review.id.toString()} review={review} />);
  return (
    <ul className="reviews__list">
      {reviewsList}
    </ul>
  );
}

export default ReviewsList;
