import CitiesItem from '../cities-item/cities-item';
import { CITIES } from '../../const';
import { CityFilter } from '../../types/city';

type CitiesListProps = {
  onCityChange: (city: CityFilter) => void;
}

function CitiesList({ onCityChange }: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <CitiesItem city={city} key={city} onClick={onCityChange} />)}
    </ul>
  );
}

export default CitiesList;
