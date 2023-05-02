import { memo } from 'react';
import { RATINGS } from '../../const';
import RatingItem, { RatingOption } from './rating-item';

type RatingListProps = {
  selectedRating: number;
  onChange: (rating: number) => void;
  isDisabledForm: boolean;
}

function RatingList({ selectedRating, onChange, isDisabledForm }: RatingListProps): JSX.Element {
  return (
    <>
      {RATINGS.map((rating: RatingOption) => <RatingItem key={rating.value} rating={rating} selectedRating={selectedRating} onChange={onChange} isDisabledForm={isDisabledForm} />)}
    </>
  );
}

export default memo(RatingList);
