import React from 'react';

import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from 'redux/store';

import TourDetailsPage from 'pages/Home';

describe('Tests Delete Tour component', () => {
  it('Should render Removed Tour from the Main List', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <TourDetailsPage />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
