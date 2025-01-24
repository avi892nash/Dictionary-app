import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CssBaseline, Grid2 } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Bookmarks from './components/Bookmarks';
import Definition from './components/Definition';

const App = () => {

  const [bookmarks, setBookMarks] = useState(JSON.parse(localStorage.getItem('bookmarks') || '{}'));

  useEffect(()=>{
    localStorage.setItem('bookmarks',  JSON.stringify (bookmarks))
  },[bookmarks])
  const addBookmark = (word, definition)=>{
   setBookMarks((oldBookmark) => {
    const newBookmarks = {...oldBookmark};
    newBookmarks[word] = definition;
    return newBookmarks;
   }
  )
  }
  const removeBookmark = (word)=>{
    setBookMarks((oldBookmark)=>{
      const newBookmarks = {...oldBookmark}
      delete newBookmarks[word];
      return newBookmarks;
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid2 container>
        <Grid2 item xs={9} alignItems="center"  sx={{p : 2}}>
      <Router>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookmarks" element={<Bookmarks bookmarks={bookmarks} />}></Route>
        <Route path="/search/:word" element={<Definition addBookmark={addBookmark} removeBookmark={removeBookmark} bookmarks={bookmarks} />}>
        </Route>
        </Routes>
      </Router>
      </Grid2>
      </Grid2>
      <div></div>
    </ThemeProvider>
  )
}

export default App
