import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button as MuiButton, Typography } from "@mui/material";
import styled from "styled-components";
import { RoleButtonForm } from "./RoleButtonForm";
import BasicModal from "component/Modal/Modal";

export const RoleButton = () => {
  const location = useLocation();
  const [createCusmoerRoles, setCustomerCreateRoles] = useState(false); // State to control modal visibility

  const handleOpen = () => setCustomerCreateRoles(true);
  const closeModal = () => setCustomerCreateRoles(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.RoleButton) {
      handleOpen(); // Open the modal if the state indicates so
      navigate(location.pathname, { replace: true });
    }
  }, []);

  const Button = styled(MuiButton)(() => ({
    display: "flex",
    width: "169px",
    height: "48px",
    padding: "12px 24px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "10px",
    flexShrink: "0",
    borderRadius: "4px",
    background: "#2D75B6",
  }));

  return (
    <div>
      <Button sx={{ textTransform: "none" }} color="primary" variant="contained" onClick={handleOpen}>
        <Typography variant="h6">Create Custom role</Typography>
      </Button>
      <BasicModal open={createCusmoerRoles} handleClose={closeModal}>
        <RoleButtonForm />
      </BasicModal>
    </div>
  );
};
