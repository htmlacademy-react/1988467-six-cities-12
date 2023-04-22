import Authorization from '../../components/authorization/authorization';
import CitiesList from '../../components/cities-list/cities-list';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../const';
import { CityFilter } from '../../types/city';

type EmptyMainPageProps = {
  authorizationStatus: AuthorizationStatus;
  onCityChange: (city: CityFilter) => void;
}

function EmptyMainPage({ authorizationStatus, onCityChange }: EmptyMainPageProps): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <Authorization authorizationStatus={authorizationStatus} />
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList onCityChange={onCityChange} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in Paris</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EmptyMainPage;
