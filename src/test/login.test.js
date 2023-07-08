import React from 'react';

import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';

import Login from 'pages/Login';

describe('Tests Login component', () => {
  it('Should render Navbar Component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Login />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
