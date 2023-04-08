import Sorts from '../sorts/sorts';
import { useState } from 'react';
import { SORT_TYPE_ACTIONS } from '../../const';
import { OfferSortType } from '../../types/sort';

type SortsContainerProps = {
  selectedSortType: OfferSortType;
  onSortTypeChange: (sortType: OfferSortType) => void;
}

function SortsContainer({ selectedSortType, onSortTypeChange }: SortsContainerProps): JSX.Element {
  const [isVisibleSorts, setVisibleSorts] = useState(false);

  const sortsHandler = () => setVisibleSorts((prevState) => !prevState);
  const selectedSortTypeTitle = SORT_TYPE_ACTIONS.find((type) => type.sortType === selectedSortType)?.title;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={sortsHandler}>
        {selectedSortTypeTitle}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isVisibleSorts && <Sorts onChangeVisibility={sortsHandler} onSortTypeChange={onSortTypeChange} />}
    </form>
  );
}

export default SortsContainer;
