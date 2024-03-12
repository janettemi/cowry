import { Card as MuiCard, Link, Typography, Box, Stack } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"


import { TextSvgIcon } from 'Assets/Icons/Icons'
import { RolePermissionForm } from "./RolePremissionForm"
import BasicModal from 'component/Modal/Modal'

export const RoleCustomerCard = () => {

    const Card = styled(MuiCard)(() => ({
     width: "285px",
     height:" 130px",
     flexshrink: "0",
     borderRadius: "10px",
     border: "1px solid #F1F0F5",
     background:" var(--Neutrals-White, #FFF)",
     boxShadow:" 0px 1px 12px 0px rgba(21, 41, 82, 0.03)",
     marginTop:"30px",
   }))

   const [seePermission, setSeePermission] = useState(''); // State to store the API key
   const handleOpen = () => setSeePermission(true);
   const closeModal = () => setSeePermission(false);



    return (
    <>
     <Stack spacing={2} sx={{display:"flex", justifyContent:"space-between"}}>

          <Card>
                <Box  sx={{display:"flex", justifyContent:"space-around"}}>
                <Typography variant="h5" >Admin</Typography>
                <Typography variant="h6" sx={{fontSize:"9px", marginTop:"8px"}}>Last modifiled at Nov 212022 at 9:30</Typography>
                </Box>
               < Box sx={{display:"flex",  justifyContent:"space-around", paddingTop:"50px"}}>
                <TextSvgIcon />
                <Link onClick={handleOpen}  style={{ cursor: 'pointer' }}>See permissions</Link>
                </Box>
                    <BasicModal open={seePermission} handleClose={closeModal}>
                        <RolePermissionForm />
                    </BasicModal>
          </Card>

    </Stack>
    </>
       
    )
}