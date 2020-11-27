import React, { Fragment } from 'react';
import { Meteor } from 'meteor/meteor';
import { Pages } from './Pages';

export const App = () => {
  const handler1 = Meteor.subscribe('register');
  const handler2 = Meteor.subscribe('notice');
  return (
    <div className="main">

      <Fragment>
        <Pages />
      </Fragment>

    </div>
  )
};
