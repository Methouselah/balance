import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";

// Найти корневой элемент
const container = document.getElementById("root");

// Создать корень
const root = ReactDOM.createRoot(container);

// Рендерить приложение
root.render(<App />);
