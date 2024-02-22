import { Card as MuiCard, Link, Typography } from "@mui/material"
import { TextSvgIcon } from "../../../../assest/icons/CustomSvgIcon"
import styled from "styled-components"
import { RoleAdminPermissions } from "./RoleAdminPermissionComponent"
import { useState } from "react"
import BasicModal from "../../../modal/Modal"

export const CardCustomerComponent = () => {

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
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
          <Card>
                <div  style={{display:"flex", justifyContent:"space-around"}}>
                <Typography 
                 sx={{
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontStyle:" normal",
                    fontWeight:" 600",
                    color:" #1A1C1F",
                    lineHeight: "36px"
               }}
                >Admin</Typography>
                <Typography
                 sx={{
                    color:" #1A1C1F",
                    fontFamily:"BR Firma",
                    fontSize:"11px",
                    fontStyle:"normal",
                    fontWeight:"500",
                    lineHeight:"21px",
                    width: "180px",
                    paddingTop:"10px"
                }}
                >Last modifiled at Nov 212022 at 9:30</Typography>
                </div>
               <div  style={{display:"flex",  justifyContent:"space-around", paddingTop:"50px"}}>
                <TextSvgIcon />
                <Link onClick={handleOpen}  style={{ cursor: 'pointer' }}>See permissions</Link>
                </div>
                    <BasicModal open={seePermission} handleClose={closeModal}>
                        <RoleAdminPermissions />
                    </BasicModal>
          </Card>
            </div>
            
        </div>
    )
}