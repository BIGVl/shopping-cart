import Shop from '../Shop';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TestComponent from 'path-to-test-component';

test('renders correctly', () => {
  const { shop } = render(<Shop />);
  expect(shop).toMatchSnapshot();
});
