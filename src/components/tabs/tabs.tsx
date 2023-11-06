import {Film} from '../../types/film';
import {useState} from 'react';
import {TabType} from '../../consts';
import cn from 'classnames';
import {DetailsTab} from './details-tab';
import {OverviewTab} from './overview-tab';
import {NotFound} from '../pages/not-found';
import {ReviewsTab} from './reviews-tab';

type TabsProps ={
  film: Film;
}

export function Tabs({film}: TabsProps) {
  const [currentTab, setCurrentTab] = useState(TabType.Overview);

  const showTab = (type: TabType) => {
    switch (type) {
      case TabType.Details:
        return <DetailsTab film={film}/>;
      case TabType.Overview:
        return <OverviewTab film={film}/>;
      case TabType.Reviews:
        return <ReviewsTab reviews={[]}/>;
      default:
        return <NotFound/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={cn('film-nav__item', {'film-nav__item--active': currentTab === TabType.Overview})}>
            <a onClick={() => setCurrentTab(TabType.Overview)} className="film-nav__link">Overview</a>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': currentTab === TabType.Details})}>
            <a onClick={() => setCurrentTab(TabType.Details)} className="film-nav__link">Details</a>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': currentTab === TabType.Reviews})}>
            <a onClick={() => setCurrentTab(TabType.Reviews)} className="film-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
      {showTab(currentTab)}
    </div>
  );
}
