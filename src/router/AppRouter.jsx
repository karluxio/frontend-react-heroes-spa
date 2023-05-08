import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (

    <>

      <Routes>

        <Route path="https://karluxio.github.io/frontend-react-heroes-spa/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="https://karluxio.github.io/frontend-react-heroes-spa/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

      </Routes>

    </>

  )
}