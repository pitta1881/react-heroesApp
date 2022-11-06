import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage } from "../auth/pages";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { Navbar } from "../ui/components";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
