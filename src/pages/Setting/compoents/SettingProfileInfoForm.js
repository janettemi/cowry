import { DialogContent, FormLabel as MuiFormLabel, TextField } from "@mui/material"
import styled from "styled-components";

const FormLabel = styled(MuiFormLabel)(()=>({
    fontFamily: "BR Firma",
    fontSize: "13px",
    fontWeight: "600",
    lineHeight: "20px",
    letterSpacing: "-0.11999999731779099px",
    textAlign: "left"
    
    }));

export const SettingProfileInfoForm = () => {
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
        }}
             >Full name</FormLabel>
             <TextField
             placeholder="full name"
             flexshrink = "0"
             borderadius=" 4px"
             fullWidth
             border=" 1px solid #EBEDEF"
             size='small'
             />
            </div>

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
        }}>Email Address </FormLabel>
             <TextField
             placeholder="janet@gmail.com"
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
        }}>Role </FormLabel>
             <TextField
             placeholder="Admin"
             flexshrink = "0"
             borderadius=" 4px"
             fullWidth
             border=" 1px solid #EBEDEF"
             size='small'
             />
            </div>
            </DialogContent>
        </div>
    )
}