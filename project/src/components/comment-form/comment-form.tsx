import { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { NewComment } from '../../types/review';
import { useAppDispatch } from '../../hooks';
import { fetchCommentsAction, sendNewCommentAction } from '../../store/actions/api-actions';
import RatingList from './rating-list';

type CommentFormProps = {
  offerId: string;
}

function CommentForm({ offerId }: CommentFormProps) {
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState<number>(0);

  const [comment, setComment] = useState<string>('');

  const [isDisabledForm, setDisabled] = useState<boolean>(false);

  const commentChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const ratingChangeHandler = useCallback(
    (newRating: number) => {
      setRating(newRating);
    }, []
  );

  const onSubmit = (newComment: NewComment) => {
    setDisabled(true);
    dispatch(sendNewCommentAction({
      ...newComment,
      onSuccess: () => {
        setRating(0);
        setComment('');
        dispatch(fetchCommentsAction(Number(offerId)));
        setDisabled(false);
      }
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (offerId && rating && comment.length > 50) {
      onSubmit({
        rating,
        comment,
        offerId
      });
    }
  };

  const isDisabled = !(rating && comment.length > 50 && comment.length <= 300);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingList selectedRating={rating} onChange={ratingChangeHandler} isDisabledForm={isDisabledForm} />
      </div>
      <textarea
        onChange={commentChangeHandler}
        value={comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isDisabledForm}
      >
        Blabla
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
