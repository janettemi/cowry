import { Button as MuiButton, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import styled from "styled-components";


import BasicModal from 'component/Modal/Modal'
import { RoleButtonForm } from "./RoleButtonForm";

export const RoleButton = () => {
  useEffect(() => {
    // You can put any initialization logic here
  }, []);

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
        <Typography variant="h6" >Create Custom role</Typography>
        </Button>
        <BasicModal open={createCusmoerRoles} handleClose={closeModal}>
               <RoleButtonForm />
          </BasicModal>
      </div>
      
        
    )
};