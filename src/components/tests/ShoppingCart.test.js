import ShoppingCart from '../ShoppingCart';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent, { specialChars } from '@testing-library/user-event';

describe('items have the right price and total, and the total for the order', () => {
  render(
    <ShoppingCart
      cartItems={[
        { img: 'img', desc: 'desc', price: 100, total: 100, x: 1 },
        { img: 'img', desc: 'desc', price: 100, total: 100, x: 1 }
      ]}
      setxItems={jest.fn}
    />
  );

  test('the right amount is displayed for the item,even when changing the number of items from the input', async () => {
    const input = screen.getAllByRole('spinbutton');
    const total = screen.getByText(/Total:/i);
    const totalOrder = screen.getByText(/The total for the order is:/i);
    userEvent.type(input[0], `${specialChars.arrowUp}`);

    expect(total).toBeInTheDocument('Total:200$');
    expect(totalOrder).toBeInTheDocument('The total for the order is: 300$');
  });
});
