import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import Authorization from '../../components/authorization/authorization';
import { AuthorizationStatus } from '../../const';
import FavoritesSorts from '../../components/favorites-sorts/favorites-sort';

type FavoritesPageProps = {
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
}

function FavoritesPage(props: FavoritesPageProps): JSX.Element {
  const { offers, authorizationStatus } = props;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length > 0 ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoritesSorts offers={offers} />
              </ul>
            </section>
            :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
