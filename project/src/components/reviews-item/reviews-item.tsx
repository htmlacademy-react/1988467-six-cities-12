import { Review } from '../../types/review';

type ReviewsItemProps = {
  review: Review;
}

type DateOptions = {
  year: 'numeric' | '2-digit' | undefined;
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long' | undefined;
}

function ReviewsItem({ review }: ReviewsItemProps): JSX.Element {
  const { id, user, rating, date, comment } = review;
  const { avatarUrl, name } = user;
  const dateOptions: DateOptions = { year: 'numeric', month: 'long' };
  const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(date));

  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${100 / 5 * Math.round(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{formattedDate}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
