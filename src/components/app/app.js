import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import gallery from "/src/mocks/gallery";
import starList from "/src/mocks/starList";
import buyOptions from "/src/mocks/buyOptions";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import MainPage from "/src/components/pages/main-page/main-page";
import ScrollToTop from "../ui/scroll-to-top/scroll-to-top";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage stars={starList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage slides={gallery} buyOptions={buyOptions} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
