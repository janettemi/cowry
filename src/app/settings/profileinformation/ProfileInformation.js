import { DialogContent, FormLabel, TextField } from "@mui/material"

export const ProfileInformation = () => {
    return(
        <div>
            <DialogContent>
            <div>
             <FormLabel>Full name</FormLabel>
             <TextField
             placeholder="full name"
             flexshrink = "0"
             borderadius=" 4px"
             fullWidth
             border=" 1px solid #EBEDEF"
             size='small'
             />
            </div>

            <div>
             <FormLabel>Email Address </FormLabel>
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
             <FormLabel>role </FormLabel>
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