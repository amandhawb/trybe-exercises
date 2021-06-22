import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um coponente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});