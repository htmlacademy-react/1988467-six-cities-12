import CitiesItem from '../cities-item/cities-item';
import { CITIES } from '../../const';

type Props = {
  onCityChange: (city: string) => void;
}

function CitiesList({ onCityChange }: Props): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <CitiesItem city={city} key={city} onClick={onCityChange} />)}
    </ul>
  );
}

export default CitiesList;

