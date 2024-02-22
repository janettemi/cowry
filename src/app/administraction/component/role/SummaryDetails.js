import styled from "@emotion/styled";
import { Button, DialogContent, DialogTitle, Divider, Typography as MuiTypography} from "@mui/material"
import Avatar from '@mui/material/Avatar';
export const SummaryDetails = () => {

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
                <div style={{background:" #F9FAFA"}}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>
                    <Avatar>TO</Avatar>
                    <Typography>Temidayo Oluwanniyi</Typography>
               </div>
                <Button>Change role</Button>
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Typography>Email Address</Typography>
                <Typography>Teminiyi@gmail.com</Typography>
            </div>
            <Divider />
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Typography>Last Login</Typography>
                <Typography>7 hours ago</Typography>
            </div>
            <Divider />
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Typography>Role</Typography>
                <Typography>Admin</Typography>
            </div>
                </div>
            <Button>View permissions</Button>
            <Button>Remove member</Button>
            </DialogContent>
           
        </div>
    )
};