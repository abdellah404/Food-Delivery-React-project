import Hero from "./components/Hero";
import React, { Suspense, lazy, useEffect } from "react";
import Loading from "./components/Loading";

const Header = lazy(() => import("./components/Header"));

const App = () => {
  

  return (
    <>
      <Suspense>
        <Header />
        <Hero/>
      </Suspense>
    </>
  );
};

export default App;
