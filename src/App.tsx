import './App.css'

import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    transition: all 0.3s;
  }
`;

const queryClient = new QueryClient();

function App() {
  const [theme, setTheme] = useState(lightTheme);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      <QueryClientProvider client={queryClient}>
        <div>ТСЖ сайт</div>
      </QueryClientProvider>
      
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <button onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}>
            Переключить тему
          </button>
    </ThemeProvider>
    </>
  );
}

export default App
