import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./app/store.js";
import App from "./App";
import "./index.css";
import { SettingsProvider } from "./context/SettingsContext";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);


