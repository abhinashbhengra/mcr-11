import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import { WatchListProvider } from "./context/WatchListContext";
import { StarredMoviesProvider } from "./context/StarredMoviesContext";
import { FilterProvider } from "./context/FilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <FilterProvider>
          <WatchListProvider>
            <StarredMoviesProvider>
              <App />
            </StarredMoviesProvider>
          </WatchListProvider>
        </FilterProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
