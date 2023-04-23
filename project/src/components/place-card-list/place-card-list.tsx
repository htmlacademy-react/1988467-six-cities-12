import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { Offer } from '../../types/offer';
import PlaceCard from '../place-card/place-card';
import { MouseEvent } from 'react';

type PlaceCardListProps = {
  className: string;
  offers: Offer[];
  onPlaceCardHover: (activeId: number) => void | undefined;
}

function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { className, offers, onPlaceCardHover } = props;

  const mouseOverHandler = (event: MouseEvent) => {
    event.preventDefault();
    onPlaceCardHover(Number(event.currentTarget.id));
  };

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <>
      {offers.map((offer) => <PlaceCard className={className} offer={offer} key={offer.id.toString()} mouseOverHandler={mouseOverHandler} authorizationStatus={authorizationStatus} />)}
    </>
  );

}

export default PlaceCardList;
