import { authReducer, types } from '../../../src/auth'

describe('authReducer', () => {

  const initialState = {
    logged: false
  }

  it("should return default values", () => {

    const state = authReducer(initialState, {})

    expect(state).toEqual({ logged: false })
  })

  it("should login and set user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "lux",
        id: 123
      }
    }

    const state = authReducer({ logged: false }, action)

    expect(state).toEqual({ logged: true, user: { name: "lux", id: 123 } })

  })

  it("should logout and quit user", () => {
    const state = { logged: true, user: { name: "lux", id: 123 } }

    const action = {
      type: types.logout
    }

    const newState = authReducer(state, action)

    expect(newState).toEqual({ logged: false })

  })
})