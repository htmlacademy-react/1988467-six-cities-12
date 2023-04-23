import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { MouseEvent, useState } from 'react';
import { AppRoute, AuthorizationStatus, CLASS_NAME_LIST } from '../../const';
import { useAppDispatch } from '../../hooks';
import { sendFavoriteStatusAction } from '../../store/actions/api-actions';

type PlaceCardProps = {
  className: string;
  offer: Offer;
  mouseOverHandler: (event: MouseEvent) => void | undefined;
  authorizationStatus: AuthorizationStatus;
}

function getElementToClassName(className: string, offer: Offer) {
  switch (className) {
    case CLASS_NAME_LIST.mainPage:
      if (offer.isPremium) {
        return (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        );
      }
      return '';
    case CLASS_NAME_LIST.offerPage:
      return null;
  }
  return null;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { className, offer, mouseOverHandler, authorizationStatus } = props;
  const { id, images, title, type, rating, price, isFavorite } = offer;

  const dispatch = useAppDispatch();

  const [isFavoriteOffer, setFavorite] = useState(isFavorite);
  const favoriteStatus = !isFavoriteOffer ? 1 : 0;

  const favoriteHandler = () => {
    setFavorite((prevState) => !prevState);
    dispatch(sendFavoriteStatusAction({ favoriteStatus, id }));
  };

  return (
    <article key={id.toString()} id={id.toString()} className={`${className}__card place-card`} onMouseEnter={mouseOverHandler}>
      {getElementToClassName(className, offer)}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Link to={`${authorizationStatus === AuthorizationStatus.Auth ? '' : AppRoute.Login}`}>
            <button className={`place-card__bookmark-button button ${(isFavorite || isFavoriteOffer) ? 'place-card__bookmark-button--active' : ''}`} type="button" onClick={favoriteHandler}>
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </Link>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${100 / 5 * Math.round(rating)}%` }}></span >
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
