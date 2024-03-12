import { Button, Checkbox , DialogContent, DialogTitle, FormControlLabel, FormLabel, TextField, Typography } from "@mui/material"
import { useState } from "react"


export const RoleButtonForm = () => {
const [customerCreateRole,setCustomerCreateRole] = useState("")

    return(
        <div style={{height:"540px",
        borderradius: "6px",
        background: "var(--Colours-White-100, #FFF)",
        boxshadow:" 0px 2px 6px 0px rgba(0, 0, 0, 0.10)",
        }}>
            <DialogTitle sx={{
                 display:"flex",
                 justifyContent:"center",
                 color: "#23203D",
                 textAlign:" center",
                 fontFamily: "BR Firma",
                 fontSize: "20px",
                 fontStyle: "normal",
                 fontWeight:" 600;",
                 lineHeight: "28px",
                 letterSpacing: "-0.1px",
            }}>Create role</DialogTitle>
            <DialogContent>
                <div>
                <FormLabel sx={{
                     fontFamily: "BR Firma",
                     fontSize: "13px",
                     fontWeight:" 600",
                     lineHeight: "20px",
                     letterSpacing: "-0.11999999731779099px",
                     textAlign: "left",
                     
                }}>What do you want to call this role?</FormLabel>
                <TextField
                 fullWidth
                 value={customerCreateRole}
                 onChange={(e) =>setCustomerCreateRole(e.target.value)}
                 size='small'
                />
                </div>
                <div style={{paddingTop:"10px"}}>
                <Typography sx={{
                     display:"flex",
                     color:" #BABABA",
                     fontFamily: "BR Firma",
                     fontSize: "12px",
                     fontStyle: "normal",
                     fontWeight:" 500;",
                     lineHeight: "18px",
                     letterSpacing: "-0.1px",
                }}>Permissions</Typography>
                <FormControlLabel  sx={{height:"30px"}}
                control={<Checkbox />}
                label={<Typography style={{
                    color:" #1A1C1F",
                    fontFamily:"BR Firma",
                    fontSize:"15px",
                    fontStyle:"normal",
                    fontWeight:"400",
                    lineHeight:"21px",
                    width: "180px",
                }}>Can view transactions</Typography>}
            />
            <FormControlLabel sx={{height:"25px"}}
                control={<Checkbox />}
                label={<Typography style={{
                    color:" #1A1C1F",
                    fontFamily:"BR Firma",
                    fontSize:"15px",
                    fontStyle:"normal",
                    fontWeight:"400",
                    lineHeight:"21px",
                    width: "180px",
                }}>Can export transactions</Typography>}
                labelPlacement="end"
            />
            <FormControlLabel  sx={{height:"30px"}}
                control={<Checkbox />}
                label={<Typography style={{
                    color:" #1A1C1F",
                    fontFamily:"BR Firma",
                    fontSize:"15px",
                    fontStyle:"normal",
                    fontWeight:"400",
                    lineHeight:"21px",
                    width: "180px",
                }}>Can view businesses</Typography>}
                labelPlacement="end"
            />
            <FormControlLabel  sx={{height:"30px"}}
                control={<Checkbox />}
                label={<Typography style={{
                    color:" #1A1C1F",
                    fontFamily:"BR Firma",
                    fontSize:"15px",
                    fontStyle:"normal",
                    fontWeight:"400",
                    lineHeight:"21px",
                    width: "180px",
                }}>Can generate API key</Typography>}
                labelPlacement="end"
            />
                <FormControlLabel sx={{height:"30px"}}
                control={<Checkbox />}
                label={<Typography style={{
                    color:" #1A1C1F",
                    fontFamily:"BR Firma",
                    fontSize:"15px",
                    fontStyle:"normal",
                    fontWeight:"400",
                    lineHeight:"21px",
                    width: "180px",
                }}>Can we withdrawal details</Typography>}
                labelPlacement="end"
            />

        <FormControlLabel sx={{height:"30px"}}
                control={<Checkbox />}
                label={<Typography style={{
                    color:" #1A1C1F",
                    fontFamily:"BR Firma",
                    fontSize:"15px",
                    fontStyle:"normal",
                    fontWeight:"400",
                    lineHeight:"21px",
                    width: "180px",
                }}>Can add new businesses</Typography>}
                labelPlacement="end"
            />
            <FormControlLabel sx={{height:"30px"}}
                    control={<Checkbox />}
                    label={<Typography style={{
                        color:" #1A1C1F",
                        fontFamily:"BR Firma",
                        fontSize:"15px",
                        fontStyle:"normal",
                        fontWeight:"400",
                        lineHeight:"21px",
                        width: "180px",
                    }}>Can export businesses</Typography>}
                    labelPlacement="end"
                />

            <FormControlLabel sx={{height:"30px"}}
                        control={<Checkbox />}
                        label={<Typography style={{
                            color:" #1A1C1F",
                            fontFamily:"BR Firma",
                            fontSize:"15px",
                            fontStyle:"normal",
                            fontWeight:"400",
                            lineHeight:"21px",
                            width: "180px",
                        }}>Can we invite new member</Typography>}
                        labelPlacement="end"
                    />
            
            <FormControlLabel sx={{height:"30px"}}
                        control={<Checkbox />}
                        label={<Typography style={{
                            color:" #1A1C1F",
                            fontFamily:"BR Firma",
                            fontSize:"15px",
                            fontStyle:"normal",
                            fontWeight:"400",
                            lineHeight:"21px",
                            width: "180px",
                        }}>Can remove exising member </Typography>}
                        labelPlacement="end"
                    />

            <FormControlLabel sx={{height:"30px"}}
                        control={<Checkbox />}
                        label={<Typography style={{
                            color:" #1A1C1F",
                            fontFamily:"BR Firma",
                            fontSize:"15px",
                            fontStyle:"normal",
                            fontWeight:"400",
                            lineHeight:"21px",
                            width: "180px",
                        }}>Can we create role </Typography>}
                        labelPlacement="end"
                    />
                
                <FormControlLabel sx={{height:"30px"}}
                        control={<Checkbox />}
                        label={<Typography style={{
                            color:" #1A1C1F",
                            fontFamily:"BR Firma",
                            fontSize:"15px",
                            fontStyle:"normal",
                            fontWeight:"400",
                            lineHeight:"21px",
                            width: "180px",
                        }}>Can change role </Typography>}
                        labelPlacement="end"
                    />
                            </div>
      
           <Button  sx={{marginTop:"10px",textTransform:"none",
            padding: "8px 18px",
        }}
                fullWidth
                variant="contained"
                color="primary">Create role
         </Button>
      
            </DialogContent>
        </div>
    )
}