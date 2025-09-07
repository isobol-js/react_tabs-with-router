import cn from 'classnames';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tabId === tab.id })}
            >
              <NavLink to={`/tabs/tab-${index + 1}`} className="navbar-item">
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId && +tabId.split('').slice(-1) <= tabs.length
          ? `Some text ${tabId.split('').slice(-1)}`
          : 'Please select a tab'}
      </div>
    </>
  );
};
