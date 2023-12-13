import { setupServer } from 'msw/node'
import { authHandlers } from './handlers/auth' // falta crearlos

export const server = setupServer(...authHandlers)
