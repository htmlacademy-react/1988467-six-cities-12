type CitiesItemProps = {
  city: string;
  onClick: (city: string) => void;
}

function CitiesItem({ city, onClick }: CitiesItemProps): JSX.Element {
  return (
    <li className="locations__item" onClick={() => onClick(city)}>
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
