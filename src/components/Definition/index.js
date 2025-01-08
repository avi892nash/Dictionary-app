import { Stack, Typography, Box, IconButton, Icon } from "@mui/material";
import { ArrowBack as BackIcon, BookmarkBorder as BookmarkIcon, Border as BookmarkedIcon, PlayArrow as PlayIcon } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";


const Definition = ()=>{
    const {word} = useParams();
    const navigate = useNavigate();
    return(
        <div>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <IconButton onClick={()=>{navigate('/')}}>
                    <BackIcon>
                    </BackIcon>
                </IconButton>
                <IconButton>
                    <BookmarkIcon></BookmarkIcon>
                </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="space-between"
                sx={{
                    mt: 3,
                    background: 'linear-gradient(90.17deg, #191E5D 0.14%, #0F133A 98.58%)',
                    boxShadow: '0px 10px 20px rgba(19 23 71 0.25)',
                    px: 4,
                    py: 5,
                    color: 'white',
                    borderRadius: 2
                }}
            >
                <Typography sx={{textTransform: "capitalize"}} variant="h5">{word}</Typography>
                <IconButton 
                     sx={{
                       background : theme => theme.palette.pink,
                       p: 1,
                       color: '#fff'
                    }}
                >
                    <PlayIcon></PlayIcon>
                </IconButton>
            </Stack>
        </div>
    )
}
export default Definition;