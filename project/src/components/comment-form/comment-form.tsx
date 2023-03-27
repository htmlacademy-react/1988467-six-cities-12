import { useState, ChangeEvent } from 'react';
import { RATINGS } from '../../const';

type FormData = {
  review: string;
  rating: number;
};

type RatingOption = {
  value: number;
  title: string;
};

type RatingProps = {
  rating: RatingOption;
  selectedRating: number;
  onChange: (rating: number) => void;

};

function Rating({ rating, selectedRating, onChange }: RatingProps) {
  const id = `${rating.value}-${rating.value > 1 ? 'stars' : 'star'}`;
  const checked = rating.value <= selectedRating;
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating.value}
        id={id}
        type="radio"
        defaultChecked={checked}
        onClick={() => onChange(rating.value)}
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={rating.title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

function CommentForm() {
  const [formData, setFormData] = useState<FormData>({
    review: '',
    rating: 0,
  });

  const commentChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, review: evt.target.value });
  };

  const ratingChangeHandler = (rating: number) => {
    setFormData({ ...formData, rating });
  };


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATINGS.map((rating: RatingOption) => <Rating key={rating.value} rating={rating} selectedRating={formData.rating} onChange={ratingChangeHandler} />)
        }
      </div>
      <textarea onChange={commentChangeHandler} value={formData.review} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved">Blabla</textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
