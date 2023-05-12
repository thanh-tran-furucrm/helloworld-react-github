import { render, screen } from '@testing-library/react';
import App from '../App';

it('it should renders welcome message', () => {
    render(<App />);
    expect(screen.getByTestId('text-title').textContent).toBe('Congratulation!')
});