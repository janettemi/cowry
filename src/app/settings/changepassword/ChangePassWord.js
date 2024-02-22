import { Button, DialogContent, FormLabel, TextField } from "@mui/material"

export const ChangePassWord = () => {
    return(
        <div>
             <DialogContent>
            <div>
             <FormLabel>Change password</FormLabel>
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
             <FormLabel>New password</FormLabel>
             <TextField
             flexshrink = "0"
             borderadius=" 4px"
             fullWidth
             border=" 1px solid #EBEDEF"
             size='small'
             />
            </div>

            <div>
             <FormLabel>Comfirm password </FormLabel>
             <TextField
             flexshrink = "0"
             borderadius=" 4px"
             fullWidth
             border=" 1px solid #EBEDEF"
             size='small'
             />
            </div>
            <Button>Save Changes</Button>
            </DialogContent>
        </div>
    )
}