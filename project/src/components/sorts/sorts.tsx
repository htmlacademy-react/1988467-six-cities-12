import { SORT_TYPE_ACTIONS } from '../../const';
import { MouseEvent } from 'react';
import { OfferSortType } from '../../types/sort';

type SortsProps = {
  onChangeVisibility: () => void;
  onSortTypeChange: (sortType: OfferSortType) => void;
  selectedSortType: OfferSortType;
}

const getSortTitle = (sortType: OfferSortType) => SORT_TYPE_ACTIONS.find((type) => type.sortType === sortType)?.title;

function Sorts(props: SortsProps): JSX.Element {
  const { onChangeVisibility, onSortTypeChange, selectedSortType } = props;
  const sortTypeChangeHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    const target = evt.currentTarget;
    target.className = 'places__option places__option--active';
    onSortTypeChange(target.id as OfferSortType);
    onChangeVisibility();
  };

  return (
    <ul className="places__options places__options--custom places__options--opened">
      <li className={`places__option${selectedSortType === 'sortPopular' ? ' places__option--active' : ''}`} tabIndex={0} id="sortPopular" onClick={sortTypeChangeHandler}>{getSortTitle('sortPopular')}</li>
      <li className={`places__option${selectedSortType === 'sortPriceAsc' ? ' places__option--active' : ''}`} tabIndex={0} id="sortPriceAsc" onClick={sortTypeChangeHandler}>{getSortTitle('sortPriceAsc')}</li>
      <li className={`places__option${selectedSortType === 'sortPriceDesc' ? ' places__option--active' : ''}`} tabIndex={0} id="sortPriceDesc" onClick={sortTypeChangeHandler}>{getSortTitle('sortPriceDesc')}</li>
      <li className={`places__option${selectedSortType === 'sortRatingDesc' ? ' places__option--active' : ''}`} tabIndex={0} id={'sortRatingDesc'} onClick={sortTypeChangeHandler}>{getSortTitle('sortRatingDesc')}</li>
    </ul>
  );
}

export default Sorts;
