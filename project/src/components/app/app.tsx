import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  rentalOffersCount: number;
}

function App({ rentalOffersCount }: AppScreenProps): JSX.Element {
  return <MainPage rentalOffersCount={rentalOffersCount} />;
}

export default App;
