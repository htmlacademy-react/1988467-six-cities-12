import { memo } from 'react';

export type RatingOption = {
  value: number;
  title: string;
};

type RatingProps = {
  rating: RatingOption;
  selectedRating: number;
  onChange: (rating: number) => void;
};

function RatingItem({ rating, selectedRating, onChange }: RatingProps) {
  const id = `${rating.value}-${rating.value > 1 ? 'stars' : 'star'}`;
  const checked = Boolean(rating.value === selectedRating);
  return (
    <>
      <input
        key={`${id}-${checked.toString()}`}
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

export default memo(RatingItem);
