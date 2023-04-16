import { useState, ChangeEvent, FormEvent } from 'react';
import { RATINGS } from '../../const';
import { NewComment } from '../../types/review';
import { useAppDispatch } from '../../hooks';
import { sendNewCommentAction } from '../../store/actions/api-actions';

type RatingOption = {
  value: number;
  title: string;
};

type RatingProps = {
  rating: RatingOption;
  selectedRating: number;
  onChange: (rating: number) => void;
};

type CommentFormProps = {
  offerId: string;
}

type RatingListProps = {
  selectedRating: number;
  onChange: (rating: number) => void;
}

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

function RatingList({ selectedRating, onChange }: RatingListProps): JSX.Element {
  return (
    <>
      {RATINGS.map((rating: RatingOption) => <Rating key={selectedRating} rating={rating} selectedRating={selectedRating} onChange={onChange} />)}
    </>
  );
}

function CommentForm({ offerId }: CommentFormProps) {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<NewComment>({
    offerId: offerId,
    comment: '',
    rating: 0,
  });

  const commentChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, comment: evt.target.value });
  };

  const ratingChangeHandler = (rating: number) => {
    setFormData({ ...formData, rating });
  };

  let message = '';

  const onSubmit = (newComment: NewComment) => {
    dispatch(sendNewCommentAction({
      ...newComment,
      onSuccess: () => {
        setFormData({ ...formData, comment: '', rating: 0 });
        message = 'Comment send successful';
      }, onError: () => {
        message = 'Comment not send';
      }
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.offerId && formData.rating && formData.comment.length > 50) {
      onSubmit(formData);
    }
  };

  const isDisabled = !(formData.rating && formData.comment.length > 50 && formData.comment.length <= 300);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingList selectedRating={formData.rating} onChange={ratingChangeHandler} />
      </div>
      <textarea onChange={commentChangeHandler} value={formData.comment} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved">Blabla</textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
      <div>{message}</div>
    </form>
  );
}

export default CommentForm;
