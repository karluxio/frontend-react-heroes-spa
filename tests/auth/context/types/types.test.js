import { types } from "../../../../src/auth"

describe('types', () => {
  it.skip("should return login string", () => {
    const loginString = types.login

    expect(loginString).toEqual("[Auth] login")
  })

  it.skip("should return logout string", () => {
    const loginString = types.logout

    expect(loginString).toEqual("[Auth] logout")
  })

  it("should return all types", () => {
    expect(types).toEqual({
      login: '[Auth] login',
      logout: '[Auth] logout',
    })
  })
})