import { Box, Typography, FilledInput, IconButton, useTheme } from "@mui/material";
import { Search as SearchIcon, Bookmark as BookmarkIcon, Gradient } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ()=>{
    const [word, setWord] = useState("");
    const theme = useTheme();
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
       e.preventDefault();
        const trimmedWord = word.trim().toLowerCase();
        if(!trimmedWord || trimmedWord.split(' ').length > 1) return 
        navigate(`/search/${word}`)
    }
    console.log("welcominggg..... in new year 2025")

    
    return(
        <Box sx={{...theme.mixins.alignInTheCenter}}  >
            <img src="./assets/book.png" alt="book-img"/>
            <Typography 
            color="primary"
            sx={{
                mt: 3,
                mb:1
            }}
            
            variant="h4">
                Dictionary
            </Typography>
            <Typography color="GrayText">
               find meanings and save for quick refrence
            </Typography>
            <Box
                sx={{width: '360px'}}
            >
            <form onSubmit={handleSubmit}>
            <FilledInput disableUnderline placeholder="Search word"
                sx={{
                    my: 4,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0px 10px 25px rgba(0,0,0,0.05)',
                    '& .MuiFilledInput-input':{
                        p:2
                    }
                }}
                startAdornment={ <SearchIcon color="disabled" />}
                fullWidth
                value={word}
                onChange={(e)=>{
                    setWord(e.target.value)
                }}
            />
            </form>
            </Box>
            <IconButton  LinkComponent={Link} to="/bookmarks"
                sx={{
                    borderRadius: 2,
                    p: 2,
                   background : 'linear-gradient(138.72deg, #DC8295 0%, #DC687C 95.83%)',
                   boxShadow: '0px 10px 10px rgba(221, 114, 133, 0.2)',
                   color: '#fff'
                }}
            >
                <BookmarkIcon />
            </IconButton>
        </Box>
    )
}
export default Home;
