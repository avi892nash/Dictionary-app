import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div></div>
    </ThemeProvider>
  )
}

export default App