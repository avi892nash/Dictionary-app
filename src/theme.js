import { createTheme } from "@mui/material";

export default createTheme({
    palette:{
        background:{
            default: '#F1F3F4'
        },
        primary:{
            main: "#14194c"
        },
        pink: 'linear-gradient(138.72deg, #DC8295 0%, #DC687C 95.83%)',
    },
    typography:{
        h4: {
            fontWeight: 800
        },
        fontFamily:'Mulish',
        h6: {
            fontWeight: 400
        },
        h5 :{
            fontWeight: 800
        },
    }
   
})