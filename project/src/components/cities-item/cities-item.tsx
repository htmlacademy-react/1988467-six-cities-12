import { CityFilter } from '../../types/city';

type CitiesItemProps = {
  city: CityFilter;
  onClick: (city: CityFilter) => void;
  selectedCity: CityFilter;
};

function CitiesItem({ city, onClick, selectedCity }: CitiesItemProps): JSX.Element {
  return (
    <li className="locations__item" onClick={() => onClick(city)}>
      <a className={`locations__item-link tabs__item${city === selectedCity ? ' tabs__item--active' : ''}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
