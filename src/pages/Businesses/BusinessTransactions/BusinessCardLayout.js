import { Stack, Typography } from "@mui/material"

export const BusinessCardLayout = () => {
    return(
        < Stack spacing={8} direction={"row"} sx={{background: "#FAFAFA",height:" 108px", borderRadius:" 6px",}}>
            <div style={{padding:"20px"}}>
                <Typography variant="h6">Business Address</Typography>
                <Typography variant="h3" >6, saki Close, ikeja,Lagos,</Typography>
            </div>
            <div style={{padding:"20px"}}>
                <Typography variant="h6" >Business Address</Typography>
                <Typography variant="h3" >6, saki Close, ikeja,Lagos,</Typography>
            </div>
            <div style={{padding:"20px"}}>
                <Typography variant="h6" >Business Address</Typography>
                <Typography variant="h3">6, saki Close, ikeja,Lagos,</Typography>
            </div>
            <div style={{padding:"20px"}}>
                <Typography variant="h6" >Business Address</Typography>
                <Typography variant="h3">6, saki Close, ikeja,Lagos,</Typography>
            </div>
        </Stack>
    )
}