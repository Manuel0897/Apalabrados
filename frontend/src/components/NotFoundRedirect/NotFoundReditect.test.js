import * as React from 'react';
import * as driver from '@testing-library/react';
import NotFoundRedirect from './NotFoundRedirect';

import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

// Using pattern to test navigation described in react-router docs
// See https://github.com/ReactTraining/react-router/blob/v5.1.2/packages/react-router/docs/guides/testing.md#alternatives
const render = () => {
  const history = createMemoryHistory();
  const subject = driver.render(
    <Router history={history}>
      <NotFoundRedirect />
    </Router>,
  );

  return [subject, history];
};

describe('NotFoundRedirect Component', () => {
  it('redirects to /error page', () => {
    const [, history] = render();
    expect(history.location.pathname).toBe('/error');
    expect(history.location.search).toBe('?status=404');
  });
});
