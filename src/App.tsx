import {MainPage, MainPageProps} from './components/pages/MainPage';

type AppProps = {
    mainPageParams: MainPageProps;
}

export function App({mainPageParams}: AppProps) {
  return (
    <MainPage {...mainPageParams}/>
  );
}
