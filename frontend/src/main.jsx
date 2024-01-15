import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import store from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#07B3E9",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
);
