import { Button, Card,  DialogContent, DialogTitle, FormControl, FormLabel, TextField } from "@mui/material";

export const ApiRestForm = () => {
    return(
        <div>
            <DialogContent>
            <DialogTitle>Reset API key</DialogTitle>
                <div>
                    <Card>
                        This action will deactivate your current API key and immedinately generate a new one.
                    </Card>
                </div>
                <FormControl>
                    <FormLabel>Why do you want to reset your Api key ?</FormLabel>
                    <TextField />
                    <FormLabel>Enter password to confirm this action</FormLabel>
                    <TextField
                    size='small'
                    label="Enter password"
                    />
                </FormControl>
                <div>
                <Button sx={{textTransform:"none"}}  variant="contained"
                color="primary">Reset API key</Button>
                </div>
            </DialogContent>
        </div>
    )
}