import {FilmFull} from '../../types/film';
import {useState} from 'react';
import {TabType} from '../../consts';
import cn from 'classnames';
import {DetailsTab} from './details-tab/details-tab';
import {OverviewTab} from './overview-tab/overview-tab';
import {NotFound} from '../not-found/not-found';
import {ReviewsTab} from './reviews-tab/reviews-tab';
import {Review} from '../../types/review';

type TabsProps ={
  film: FilmFull;
  reviews: Array<Review>;
}

export function Tabs({film, reviews}: TabsProps) {
  const [currentTab, setCurrentTab] = useState(TabType.Overview);

  const showTab = (type: TabType) => {
    switch (type) {
      case TabType.Details:
        return <DetailsTab film={film}/>;
      case TabType.Overview:
        return <OverviewTab film={film}/>;
      case TabType.Reviews:
        return <ReviewsTab reviews={reviews}/>;
      default:
        return <NotFound/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={cn('film-nav__item', {'film-nav__item--active': currentTab === TabType.Overview})}>
            <button onClick={() => setCurrentTab(TabType.Overview)} className="film-nav__link">Overview</button>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': currentTab === TabType.Details})}>
            <button onClick={() => setCurrentTab(TabType.Details)} className="film-nav__link">Details</button>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': currentTab === TabType.Reviews})}>
            <button onClick={() => setCurrentTab(TabType.Reviews)} className="film-nav__link">Reviews</button>
          </li>
        </ul>
      </nav>
      {showTab(currentTab)}
    </div>
  );
}
