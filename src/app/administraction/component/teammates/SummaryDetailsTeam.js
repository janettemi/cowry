import styled from "@emotion/styled";
import { Button, DialogContent, DialogTitle, Divider, Typography as MuiTypography} from "@mui/material"
import Avatar from '@mui/material/Avatar';
export const SummaryDetailsTeam = () => {

    const Typography = styled(MuiTypography)(()=>({
        fontFamily:" BR Firma",
        fontSize:" 14px",
        fontWeight: "400",
        lineHeight:" 24px",
        letterSpacing: "0.004em",
        textAlign:" left"
    }))
    return(
        <div>
            <DialogTitle 
            sx={{
                display:"flex",
                justifyContent:"center",
                color: "#23203D",
                textAlign:" center",
                fontFamily: "BR Firma",
                fontSize: "23px",
                fontStyle: "normal",
                fontWeight:" 600;",
                lineHeight: "28px",
                letterSpacing: "-0.1px",
            }}
            >Summary Details</DialogTitle>
            <DialogContent>
                <div 
                style={{
                    background:" #F9FAFA",
                    height:" 300px",
                    borderRadius: "8px, 8px, 8px, 0px",
                    gap:" 16px",

                 }}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{padding:"15px"}}>
                    <Avatar sx={{
                        width:" 51px",
                        height: "51px",
                        
                    }}>TO</Avatar>
                    <Typography sx={{paddingTop:"10px"}}>Temidayo Oluwanniyi</Typography>
               </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
                <Typography>Email Address</Typography>
                <Typography>Teminiyi@gmail.com</Typography>
            </div>
            <Divider />
            <div style={{display:"flex", justifyContent:"space-between",padding:"20px"}}>
                <Typography>Last Login</Typography>
                <Typography>7 hours ago</Typography>
            </div>
            <Divider />
            <div style={{display:"flex", justifyContent:"space-between",padding:"20px"}}>
                <Typography>Role</Typography>
                <Typography>Admin</Typography>
            </div>
                </div>
            <Button  sx={{marginTop:"10px",textTransform:"none",
            padding: "8px 18px",
        }}
                fullWidth
                variant="contained"
                color="primary">View permissions</Button>
            </DialogContent>
           
        </div>
    )
};