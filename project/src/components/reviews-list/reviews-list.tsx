import { Review } from '../../types/review';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList(props: ReviewsListProps): JSX.Element {
  const { reviews } = props;
  const reviewsList = reviews.map((review) => <ReviewsItem key={review.id.toString()} review={review}/>);
  return (
    <ul className="reviews__list">
      {reviewsList}
    </ul>
  );
}

export default ReviewsList;
