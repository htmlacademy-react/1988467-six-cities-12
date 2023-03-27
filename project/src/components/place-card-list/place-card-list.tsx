import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { MouseEvent } from 'react';

type PlaceCardListProps = {
  offers: Offer[];
  onPlaceCardHover: (activeId: number) => void;
}

function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { offers, onPlaceCardHover } = props;

  const mouseOverHandler = (event: MouseEvent) => {
    event.preventDefault();
    onPlaceCardHover(Number(event.currentTarget.id));
  };

  return (
    <>
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id.toString()} mouseOverHandler={mouseOverHandler} />)}
    </>
  );

}

export default PlaceCardList;
