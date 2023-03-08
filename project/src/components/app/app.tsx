import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  rentalOffersCount: number;
  placeCardCount: number[];
}

function App({ rentalOffersCount, placeCardCount }: AppScreenProps): JSX.Element {
  return <MainPage rentalOffersCount={rentalOffersCount} placeCardCount={placeCardCount} />;
}

export default App;
