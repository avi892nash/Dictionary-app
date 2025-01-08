import { Stack, Typography, Box, IconButton, Icon } from "@mui/material";
import { ArrowBack as BackIcon, BookmarkBorder as BookmarkIcon, Border as BookmarkedIcon } from "@mui/icons-material";


const Definition = ()=>{
    return(
        <div>
            <Stack direction="row" justifyContent="space-between">
                <IconButton>
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
                    background: 'linear-gradient(90.17deg, #191E5D 0.14%, #F133A 98.58%)',
                    boxShadow: '0px 10px 20px rgba(19 23 71 0.25)',
                    px: 4,
                    py: 5,
                    color: 'white',
                    borderRadius: 2
                }}
            >
                <Typography variant="h4">Hello</Typography>
            </Stack>
        </div>
    )
}
export default Definition;