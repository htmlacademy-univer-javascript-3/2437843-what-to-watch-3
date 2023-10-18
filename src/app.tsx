import {MainPage, MainPageProps} from './components/pages/main-page';

type AppProps = {
    mainPageParams: MainPageProps;
}

export function App({mainPageParams}: AppProps) {
  return (
    <MainPage {...mainPageParams}/>
  );
}
