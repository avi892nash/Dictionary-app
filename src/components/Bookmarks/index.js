import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowBack as BackIcon } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Bookmarks = ({bookmarks}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Stack sx={{mb: 2}} direction="row" alignItems="center">
                <IconButton onClick={()=>{navigate("/")}}>
                    <BackIcon sx={{color: "black", mr: 1}} />
                </IconButton>
                <Typography variant="h6">
                    Bookmarks
                </Typography>
            </Stack>
            {Object.keys(bookmarks).map((bookmarkedWord, key) => (
             <Box 
                component={Link}
                to={`/search/${bookmarkedWord}`}
                sx={{
                    mb: 2,
                    fontWeight: 800,
                    textTransform: 'capitalize',
                    backgroundColor: "white",
                    borderRadius: 1,
                    display:"block",
                    p: 2,
                    color: "black",
                    textDecoration: "none"

            }}>
                    {bookmarkedWord}
            </Box>
              
            ))}
        </div>
    )
}
export default Bookmarks;
