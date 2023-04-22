import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { useAppDispatch } from '../../hooks';
import { useState } from 'react';
import { fetchOffersAction, sendFavoriteStatusAction } from '../../store/actions/api-actions';

type FavoriteCardProps = {
  offer: Offer;
}

function FavoriteCard({ offer }: FavoriteCardProps): JSX.Element | null {

  const { id, images, title, isPremium, type, rating, price, isFavorite } = offer;
  const keyValue = offer.id;

  const dispatch = useAppDispatch();

  const [isFavoriteOffer, setFavorite] = useState(isFavorite);
  const favoriteStatus = !isFavoriteOffer ? 1 : 0;

  const favoriteHandler = () => {
    setFavorite((prevState) => !prevState);
    dispatch(sendFavoriteStatusAction({ favoriteStatus, id }));
    dispatch(fetchOffersAction());
  };

  return (isFavorite ?
    <article key={keyValue} className="favorites__card place-card">
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${(isFavorite || isFavoriteOffer) ? 'place-card__bookmark-button--active' : ''}`} type="button" onClick={favoriteHandler}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${100 / 5 * Math.round(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
    : null);
}

export default FavoriteCard;
