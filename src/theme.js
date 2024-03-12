import { createTheme } from '@mui/material';

 const theme = createTheme({
    typography: {
        h5: {
            fontWeight:" 700",
            fontSize: "24px",
            lineHeight:" 30px",
            letterSpacing:" 0em",
            textAlign:" left",
        },
        h6: {  
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "18px",
        letterSpacing:" 0.02em",
        textAlign: "left"
        },
        h4: {
            fontSize: "14px",
            fontWeight:" 400",
            lineHeight: "18px",
            letterSpacing:" 0.02em",
            textAlign:" left"
            
        },
        h3: {
            fontSize: "13px",
            fontWeight:" 600",
            lineHeight:" 20px",
            letterSpacing: "-0.11999999731779099px",
            textAlign: "left"
        },
        h2:{
            fontSize:" 13px",
            fontWeight:" 400",
            lineHeight: "22px",
            letterSpacing:" 0px",
            textAlign:" center",

        }
      },
})
export default theme;