import PlaceCardList from '../../components/place-card-list/place-card-list';
import Logo from '../../components/logo/logo';
import { Offer } from '../../types/offer';
import Map from '../../components/map/map';
import { CITIES_DATA } from '../../mocks/cities';
import { useState } from 'react';
import { CLASS_NAME_LIST, MAP_SIZE } from '../../const';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch } from '../../hooks';
import { changeCityAction, changeSortTypeAction } from '../../store/actions/actions';
import SortsContainer from '../../components/sorts-container/sorts-container';
import { CityFilter } from '../../types/city';
import { OfferSortType } from '../../types/sort';

type MainPageProps = {
  rentalOffersCount: number;
  offers: Offer[];
  selectedCity: CityFilter;
  selectedSortType: OfferSortType;
}

function MainPage({ rentalOffersCount, offers, selectedCity, selectedSortType }: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offer | undefined>(undefined);

  const currentCity = CITIES_DATA.find((cityToFind) => cityToFind.title === selectedCity);

  const onPlaceCardHover = (activeId: number) => {
    const currentCard = offers.find((offer) => offer.id === activeId);
    setActiveCard(currentCard);
  };

  const dispatch = useAppDispatch();
  const onCityChange = (city: CityFilter) => dispatch(changeCityAction(city));
  const onSortTypeChange = (sortType: OfferSortType) => dispatch(changeSortTypeAction(sortType));

  const placeCardList = <PlaceCardList className={CLASS_NAME_LIST.mainPage} offers={offers} onPlaceCardHover={onPlaceCardHover} />;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList onCityChange={onCityChange} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalOffersCount} places to stay in {selectedCity}</b>
              <SortsContainer selectedSortType={selectedSortType} onSortTypeChange={onSortTypeChange} />
              <div className="cities__places-list places__list tabs__content">
                {placeCardList}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {!!currentCity && <Map city={currentCity} points={offers} activeCard={activeCard} size={MAP_SIZE.mainPage} />}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
