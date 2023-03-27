import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { MouseEvent } from 'react';

type PlaceCardProps = {
  offer: Offer;
  mouseOverHandler: (event: MouseEvent) => void;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offer, mouseOverHandler } = props;
  const { id, pictures, title, mark, apartmentType, rating, price, isFavorite } = offer;

  return (
    <article key={id.toString()} id={id.toString()} className="cities__card place-card" onMouseEnter={mouseOverHandler}>
      <div className="place-card__mark">
        <span>{mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={pictures[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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
        <p className="place-card__type">{apartmentType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
