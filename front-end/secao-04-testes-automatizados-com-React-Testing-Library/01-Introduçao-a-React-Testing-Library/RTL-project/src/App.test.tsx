// src/App.test.tsx

import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import ValidEmail from './components/ValidEmail';


test('Verifica se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email:');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verifica se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verifica se existe um botão enviar na tela', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
});

test('Verifica se existe um botão voltar na tela', () => {
  render(<App />);
  const btnBack = screen.getByRole('button', { name: 'Voltar' });
  expect(btnBack).toBeInTheDocument();
});

//1- encontrar o campo de input
//2 - encontrar e clickar no botão de enviar
//3 - verificar se o valor inserido é adicionado na tela

test('Verifica se o e-mail e o botao enviar funcionam corretamente', async () => { //Como o userEvent retorna uma promisse, precisa ser assincrono
  render(<App />);

  const inputEmail = screen.getByLabelText('Email:');
  const buttonEnviar = screen.getByTestId('id-send');
  const title = screen.getByRole('heading', {name: 'Valor:'});
  const EMAIL_USER = 'email@email.com';

  await userEvent.type(inputEmail, EMAIL_USER);
  await userEvent.click(buttonEnviar);
  
  expect(inputEmail).toHaveValue('');
  expect(title).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailinvalido';
  render(<ValidEmail email={ EMAIL_USER } />);

  const isValid = screen.getByText(/Email Inválido/i);
  expect(isValid).toBeInTheDocument();
});
