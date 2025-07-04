import { render, screen } from '@testing-library/react';
import Spinner from './spinner';

describe('Component: spinner', () => {
  it('should render correctly', () => {
    render(<Spinner />);
    expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument();
  });
});
