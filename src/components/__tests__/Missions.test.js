import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../redux/configureStore';
import Missions from '../Missions';

describe('Mission page testing', () => {
  test('Does Mission match the snapshot', () => {
    const mission = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(mission).toMatchSnapshot();
  });
});
