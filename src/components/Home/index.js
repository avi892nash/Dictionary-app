import { Box, Typography, FilledInput, IconButton } from "@mui/material";
import { Search as SearchIcon, Bookmark as BookmarkIcon } from "@mui/icons-material";

const Home = ()=>{
    return(
        <Box
                sx={
                    {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent:"center",
                        height:"100vh"
                    }
                }
        >
            <img />
            <Typography variant="h4">
                Dictionary
            </Typography>
            <Typography>
               find meanings and save for quick refrence
            </Typography>
            <FilledInput />
            <IconButton>
                <BookmarkIcon />
            </IconButton>
        </Box>
    )
}
export default Home;