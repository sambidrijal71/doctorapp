import React from 'react'
import { render, screen } from '@testing-library/react'
import RegisterPage from './RegisterPage'
import { BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

test('three input boxes and a button', () => {
  render(<Router><RegisterPage /></Router>)
  const inputBoxes = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');
  const link = screen.getByRole('link', { name: /👉 already a user\?, login here!! 👈/i })

  expect(inputBoxes).toHaveLength(3);
  expect(button).toBeInTheDocument();
  expect(link).toBeInTheDocument()
})

test('render name, email and password of the user', async () => {
  render(<Router><RegisterPage /></Router>)
  const user = { name: 'sambid', email: 'sam@bid.com', password: 'password' }

  const nameInput = screen.getByRole('textbox', { name: /enter your name\./i })
  const emailInput = screen.getByRole('textbox', { name: /enter your email\./i })
  const passwordInput = screen.getByRole('textbox', { name: /enter your password\./i })
  const button = screen.getByRole('button')

  userEvent.click(nameInput)
  userEvent.keyboard(user.name)
  userEvent.click(emailInput)
  userEvent.keyboard(user.email)
  userEvent.click(passwordInput)
  userEvent.keyboard(user.password)

  userEvent.click(button);

  expect(await screen.findByRole('textbox', { name: /enter your name\./i })).toHaveValue(user.name)
  expect(await screen.findByRole('textbox', { name: /enter your email\./i })).toHaveValue(user.email)
  expect(await screen.findByRole('textbox', { name: /enter your password\./i })).toHaveValue(user.password)
})