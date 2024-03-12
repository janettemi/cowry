import { Button, DialogContent, FormLabel , TextField } from "@mui/material";


export const SettingChangePasswordForm = () => {
    return(
        <div>
             <DialogContent>
            <div style={{
                width: "500px",
                height:" 71px",
                borderRadius: "4px"
                
            }}>
             <FormLabel sx={{
          fontFamily: "BR Firma",
          fontSize: "13px",
          fontWeight: "600",
          lineHeight: "20px",
          letterSpacing: "-0.11999999731779099px",
          textAlign: "left"
        }}>Change password</FormLabel>
             <TextField
             placeholder="change password"
             flexshrink = "0"
             borderadius=" 4px"
             fullWidth
             border=" 1px solid #EBEDEF"
             size='small'
             />
            </div>

            <div>
             <FormLabel  sx={{
          fontFamily: "BR Firma",
          fontSize: "13px",
          fontWeight: "600",
          lineHeight: "20px",
          letterSpacing: "-0.11999999731779099px",
          textAlign: "left"
        }}>New password</FormLabel>
             <TextField
             flexshrink = "0"
             borderadius=" 4px"
             fullWidth
             border=" 1px solid #EBEDEF"
             size='small'
             />
            </div>

            <div>
             <FormLabel sx={{
          fontFamily: "BR Firma",
          fontSize: "13px",
          fontWeight: "600",
          lineHeight: "20px",
          letterSpacing: "-0.11999999731779099px",
          textAlign: "left"
        }}>Comfirm password </FormLabel>
             <TextField
             flexshrink = "0"
             borderadius=" 4px"
             fullWidth
             border=" 1px solid #EBEDEF"
             size='small'
             />
            </div>
            <div>
            <Button 
            sx={{marginTop:"15px",textTransform:"none",
            padding: "8px 18px",
           }}
            fullWidth   color="primary" variant="contained">Save Changes</Button>
            </div>
            </DialogContent>
        </div>
    )
}