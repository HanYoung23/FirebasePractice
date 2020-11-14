import React, { useState } from "react";
import AppRouter from "component/AppRouter";
import fbase from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
