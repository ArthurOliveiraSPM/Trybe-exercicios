import { render, screen } from '@testing-library/react';


test('Testando o componente ValidEmail, caso o email passado seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);//Ao inves de renderizar TODO o componente esta sento renderizado o 

  const isValid = screen.getByText(/Email Válido/i);
  expect(isValid).toBeInTheDocument();
});
