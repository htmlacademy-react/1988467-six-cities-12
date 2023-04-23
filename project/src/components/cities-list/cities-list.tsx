import CitiesItem from '../cities-item/cities-item';
import { CITIES } from '../../const';
import { CityFilter } from '../../types/city';

type CitiesListProps = {
  onCityChange: (city: CityFilter) => void;
  selectedCity: CityFilter;
}

function CitiesList({ onCityChange, selectedCity }: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <CitiesItem city={city} key={city} onClick={onCityChange} selectedCity={selectedCity} />)}
    </ul>
  );
}

export default CitiesList;
