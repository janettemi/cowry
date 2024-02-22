import { Button as MuiButton, Typography } from "@mui/material"
import { useState } from "react";
import styled from "styled-components";
import BasicModal from "../../../modal/Modal";
import { CustomerCreateRole } from "./CustomerCreaterole";

export const CustomerButton = () => {

  const [createCusmoerRoles, setCustomerCreateRoles] = useState(''); // State to store the API key
   const handleOpen = () => setCustomerCreateRoles(true);
   const closeModal = () => setCustomerCreateRoles(false);
   
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
          <Button sx={{textTransform:"none"}}  color="primary" variant="contained" onClick={handleOpen} >
        <Typography sx={{
          color: "var(--Colours-White-100, #FFF)",
          fontFamily:" BR Firma",
          fontSize:" 15px",
          fontWeight:" 50",
          lineHeight: "18px",
      }}>Create Custom role</Typography>
        </Button>
        <BasicModal open={createCusmoerRoles} handleClose={closeModal}>
               <CustomerCreateRole ></CustomerCreateRole>
          </BasicModal>
      </div>
      
        
    )
};