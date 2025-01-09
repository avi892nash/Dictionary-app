import { Stack, Typography, Box, IconButton, Icon, Divider } from "@mui/material";
import { ArrowBack as BackIcon, BookmarkBorder as BookmarkIcon, Border as BookmarkedIcon, PlayArrow as PlayIcon } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";


const Definition = ()=>{
    const {word} = useParams();
    const navigate = useNavigate();
    const [definition, setDefinition] = useState([]);

    useEffect (()=>{
        const  fetchDefinition = async () =>{
            const response =   await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            console.log(response.data);
            setDefinition(response.data)
        }
        fetchDefinition();
        
    }, [])
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
