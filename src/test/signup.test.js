import React from 'react';

import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';

import SignUp from 'pages/SignUp';

describe('Tests Signup component', () => {
  it('Should render Navbar Component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
