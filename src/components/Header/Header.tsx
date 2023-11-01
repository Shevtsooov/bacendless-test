import { NavLink, useLocation } from 'react-router-dom';
import tabs from '../../data/tabs.json'
import cn from 'classnames';
import './Header.scss';

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  const orderedTabs = tabs.sort((tabA, tabB) => (
    tabA.order - tabB.order 
  ));

  return (
    <div className="header">
      <div className="header__buttons">
        {orderedTabs.map(tab => (
          <NavLink
            to={`/${tab.path}`}
            key={tab.id}
            className={cn("header__button",{
              "header__button--active": tab.path === pathname.slice(1)
            })}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
