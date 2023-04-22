import { Offer } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';


type FavoriteCardListProps = {
  offers: Offer[];
}

function FavoriteCardList({ offers }: FavoriteCardListProps): JSX.Element {
  return (
    <>
      {
        offers.map((offer) => <FavoriteCard key={offer.id} offer={offer} />)
      }
    </>
  );
}

export default FavoriteCardList;
