import renderer from 'react-test-renderer';

import { BrowserRouter } from 'react-router-dom';

import MediaLinks from 'components/Navbar/MediaLinks';

describe('Tests Navbar component', () => {
  it('Should render Medialinks Component', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <MediaLinks />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
