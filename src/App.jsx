// App.js
import React, { StrictMode, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

//import fragments

export const RemoveTrailingSlash = ({ ...rest }) => {
  const location = useLocation();
  // If the last character of the url is '/'
  if (location.pathname.match("/.*/$")) {
    return (
      <Navigate
        replace
        {...rest}
        to={{
          pathname: location.pathname.replace(/\/+$/, ""),
          search: location.search,
        }}
      />
    );
  } else return null;
};

export const App = () => {
  /*
        const location = useLocation();
      */
  return (
    <Router>
      <RemoveTrailingSlash />
      <StrictMode>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index" element={<HomePage ewe={"hola mudo"} />} />
          {/* 404 page */}
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </StrictMode>
    </Router>
  );
};

export default React.memo(App);