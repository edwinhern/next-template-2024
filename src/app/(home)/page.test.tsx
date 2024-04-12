import { render } from '@testing-library/react';

import HomePage from '@/app/(home)/page';

describe('Home Component', () => {
  it('renders the component successfully', () => {
    render(<HomePage />);
  });
});
