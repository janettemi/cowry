import { Button as MuiButton, Typography } from "@mui/material"
import { useState } from "react";
import styled from "styled-components";
import { InviteFormComponent } from "./InviteFormComponent";
import BasicModal from "../../../../modal/Modal";

export const ButtonInvite = () => {
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const closeModal = () => setOpen(false);

    const Button = styled(MuiButton)(()=>({
        display:" flex",
        width: "169px",
        height: "48px",
        padding: "12px 24px",
        flexdirection: "column",
        justifycontent:" center",
        alignitems: "flex-start",
        gap: "10px",
        flexshrink: "0",
        borderradius: "4px",
        background:" #2D75B6",
        }));

    return (
      <div>
          <Button sx={{textTransform:"none"}}  color="primary" variant="contained" onClick={handleOpen}>
        <Typography sx={{
          color: "var(--Colours-White-100, #FFF)",
          fontFamily:" BR Firma",
          fontSize:" 15px",
          fontWeight:" 50",
          lineHeight: "18px",
      }}>Invite team mate</Typography>
        </Button>
    <BasicModal open={open} handleClose={closeModal}>
        <InviteFormComponent />
    </BasicModal>

      </div>
        
    )
}