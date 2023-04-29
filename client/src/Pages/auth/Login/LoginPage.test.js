import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './LoginPage'
import userEvent from '@testing-library/user-event'

test("Two input box and a button", () => {
  render(<Router><LoginPage /></Router>)

  const inputBoxes = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');
  const link = screen.getByRole('link', { name: /👉 not a user\?, register here!! 👈/i })

  expect(inputBoxes).toHaveLength(2);
  expect(button).toBeInTheDocument();
  expect(link).toBeInTheDocument()
})

test('render email and password of the user', async () => {
  render(<Router><LoginPage /></Router>)
  const user = { email: 'sam@bid.com', password: 'password' }
  const emailInput = screen.getByRole('textbox', { name: /enter your email\./i })
  const passwordInput = screen.getByRole('textbox', { name: /enter your password\./i })
  const button = screen.getByRole('button')

  userEvent.click(emailInput)
  userEvent.keyboard(user.email)
  userEvent.click(passwordInput)
  userEvent.keyboard(user.password)

  userEvent.click(button);

  expect(await screen.findByRole('textbox', { name: /enter your email\./i })).toHaveValue(user.email)
  expect(await screen.findByRole('textbox', { name: /enter your password\./i })).toHaveValue(user.password)
})