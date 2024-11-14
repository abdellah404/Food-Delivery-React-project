import Hero from "./components/Hero";
import React, { Suspense, lazy, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import { Routes } from "react-router-dom";
const AppRoutes = lazy(() => import("./routes/AppRoutes"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));


const App = () => {
  

  return (
    <>
      <Suspense>
      <Header/>
      <AppRoutes/>
      <Footer />
      </Suspense>
    </>
  );
};

export default App;
