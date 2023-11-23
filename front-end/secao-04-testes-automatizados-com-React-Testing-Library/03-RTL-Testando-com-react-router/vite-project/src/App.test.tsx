import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';


import App from './App';
import About from './pages/About';
import { renderWithRouter } from './utils/renderWithRouter';

it('Renderiza página inicial', () => {
  renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

it('Renderiza texto da página inicial', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})

it('Renderiza o texto utilizando wrapper', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

it('Navega para página About', async () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i});
  await userEvent.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
})

it('Renderiza o componente About', () => {
  render(<About />, { wrapper: BrowserRouter });
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

// it('Navega para página Inicio', async () => {
//   render(<About />, { wrapper: BrowserRouter });

//   expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
//   const homeLink = screen.getByRole('link', { name: /Início/i });
//   await userEvent.click(homeLink);

//   expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
// });

it('Navega para a página About', async () => {
  const { user } = renderWithRouter(<App />); // Pegamos o userEvent da função renderWithRouter

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i });
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});

it('Renderiza diretamente na rota /about', async () => {
  const { user } = renderWithRouter(<App />, { route: '/about' });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /Início/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});

it('Testa rota not found', () => {
  renderWithRouter(<App />, { route: '/something-else' });

  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});