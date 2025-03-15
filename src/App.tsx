import './App.css'

import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';


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
      <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Router>
        <button onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}>
          Переключить тему
        </button>
      </ThemeProvider>
    </QueryClientProvider>
    </>
  );
}

export default App
