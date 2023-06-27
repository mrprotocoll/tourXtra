import React from 'react';

import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from 'redux/store';

import Home from 'pages/Home';

describe('Tests Home component', () => {
  it('Should render Navbar Component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot('Tests Home component Should render Navbar Component');
  });
});
