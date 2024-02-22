import { useState } from 'react';
import { DetalisSvgIcon } from '../../../assest/icons/CustomSvgIcon';
import { IconButton, Button, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


export const BusinessesIconButtonCell = (params) => {
    const [showDetails, setShowDetails] = useState(false);
   
    // const navigate = useNavigate(); 

  const handleIconClick = () => {
    setShowDetails(!showDetails);
  };

//   const handleMoreDetailsClick = () => {
//     // Navigate to the "transitiondetails" component
//    navigate('/transation/TransationDetail');
//   };

    return (
        <>
        <IconButton onClick={handleIconClick}>
        <DetalisSvgIcon />
        </IconButton>
        {showDetails && (
                <Button  
            style={{
              position: 'absolute',
              top: '30%',
              left: '90%',
              flexshrink: "0",
              transform: 'translate(-50%, -50%)',
              padding: '10px',
              background:" #F9FAFA",
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="body2"
            sx={{
              color: "#1A1C1F",
              fontFamily: "BR Firma",
              fontSize:" 13px",
              fontStyle: "normal",
              fontWeight:" 400",
              lineHeight:" 20px", /* 153.846% */
              letterSpacing:" -0.12px",
            }}
            > More details</Typography>
          </Button>
        )}
      </>
  
    );
  };
  
