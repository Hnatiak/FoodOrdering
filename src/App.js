// { useEffect }
import React from "react";
// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout.jsx";
import { AppContainer } from './App.styled.js'
import Main from "./components/Main/Main.jsx";

// const HomePage = lazy(() => import("./components/HomePage/HomePage"));


export const App = () => {
  
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   accessToken && dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />

        </Route>
      </Routes>
    </AppContainer>
  );
}

// export default App;
