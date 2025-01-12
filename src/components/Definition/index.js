import { Stack, Typography, Box, IconButton, Icon, Divider , CircularProgress as LoaderIcon, Button} from "@mui/material";
import { ArrowBack as BackIcon, Balance, BookmarkBorder as BookmarkIcon, Bookmark as BookmarkedIcon, PlayArrow as PlayIcon } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";


const Definition = ({addBookmark, removeBookmark, bookmarks})=>{
    const {word} = useParams();

    const isBookmarked = useState(Object.keys(bookmarks).includes(word));
    const navigate = useNavigate();
    const [definition, setDefinition] = useState([]);
    const [wordExist, setWordExist] = useState(true); 
    const [audio, setAudio] = useState(null);

    useEffect (()=>{
        const  fetchDefinition = async () =>{
            try{
            const response =   await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            console.log("complete data..", response.data);
            setDefinition(response.data);
            const phonetic = response.data[0].phonetics
            if(!phonetic.length) return;
            const url = phonetic[0].audio;
            setAudio(new Audio(url));           
            }
            catch(error){
                setWordExist(false);
            }
        }
        fetchDefinition();
    }, [])

    if(!wordExist) return <Box sx={{...theme.mixins.alignInTheCenter}}>
        <Typography >
            Word not Found
        </Typography>
        <Button sx={{textTransform : "capitalize", mt:2}} variant="contained"
            onClick={()=>{
                navigate("/")
            }}
        >
            Go back
        </Button>
    </Box>

    if(!definition.length) return <Box sx={{...theme.mixins.alignInTheCenter}}>
        <LoaderIcon></LoaderIcon>
    </Box>
    return(
        <div>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <IconButton onClick={()=>{navigate('/')}}>
                    <BackIcon sx={{color: "black"}}>
                    </BackIcon>
                </IconButton>
                <IconButton   >
                        <div onClick={()=>
                     isBookmarked ? removeBookmark(word) : addBookmark(word,definition) }>
                    {isBookmarked ? <BookmarkedIcon sx={{color: "black"}}></BookmarkedIcon> :<BookmarkIcon sx={{color: "black"}}></BookmarkIcon>}
                    </div>
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
                    <PlayIcon onClick={()=>audio.play()}></PlayIcon>
                </IconButton>
               
            </Stack>
            {definition.map((def, index)=>(
                    <Fragment key={index}>
                        <Divider sx={{
                             display: index === 0 ? "none" : "block",
                             m : 3}}/>
                           {def.meanings.map((meaning, meaningIndex)=>(
                                <Box key={`${meaningIndex}`}
                                sx={{
                                    borderRadius: 2,
                                    p: 2,
                                    mt: 3,
                                    boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.05)',
                                    backgroundColor: '#fff'
                                }}>
                                    <Typography variant="subtitle1"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    color: "GrayText"
                                                }}
                                    > {meaning.partOfSpeech} </Typography>

                                    <Typography variant= "body2"  color = "GrayText"
                                                sx = {{
                                                   py : 2
                                                }}
                                    >
                                         {meaning.definitions.map((defi, idx)=>(
                                        <Typography key={idx}>
                                            {meaning.definitions.length > 1 && `${idx + 1}. `} {defi.definition}
                                        </Typography>
                                       ))}
                                    </Typography>
                                </Box>
                        ))
                        }
                    </Fragment>
            )
                 )}   

               

        </div>
    )
}
export default Definition;
