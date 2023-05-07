import { Routes, Route, Navigate } from "react-router-dom"

import { Navbar } from "../../ui"
import { DCPage, MarvelPage, SearchPage, HeroPage } from "../"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/dc" element={<DCPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/*" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  )
}