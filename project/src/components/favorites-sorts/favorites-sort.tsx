import { CITIES } from '../../const';
import { Offer } from '../../types/offer';
import FavoriteCardList from '../favorite-card-list/favorite-card-list';

type FavoritesSortsProps = {
  offers: Offer[];
}

function FavoritesSorts({ offers }: FavoritesSortsProps): JSX.Element {
  return (
    <>
      {CITIES.map((city) => {
        const keyValue = city;
        const favoritesByCity = offers.filter((offer) => offer.city?.name === city);

        return (favoritesByCity.length > 0 ?
          <li key={keyValue} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="/">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              <FavoriteCardList offers={favoritesByCity} />
            </div>
          </li>
          : null
        );
      }
      )}
    </>
  );
}

export default FavoritesSorts;
