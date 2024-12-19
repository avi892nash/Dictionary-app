import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Bookmarks from './components/Bookmarks';
import Definition from './components/Definition';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookmarks" element={<Bookmarks />}></Route>
        <Route path="/search/:word" element={<Definition />}>
        </Route>
        </Routes>
      </Router>
      <div></div>
    </ThemeProvider>
  )
}

export default App