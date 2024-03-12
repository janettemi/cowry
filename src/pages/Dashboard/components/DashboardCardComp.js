import { Box,
    Typography ,
   Card as MuiCard,
   styled,
   Stack} from "@mui/material"
   
import { CirleSvgIcon } from "Assets/Icons/Icons"

   const Card = styled(MuiCard)(() => ({
    width: "250px",
    height:" 117px",
    flexshrink: "0",
    borderRadius: "10px",
    border: "1px solid #F1F0F5",
    background:" var(--Neutrals-White, #FFF)",
    boxShadow:" 0px 1px 12px 0px rgba(21, 41, 82, 0.03)",
    marginTop:"20px",
  }))

export const DashboardCardComp = () => {

    return(
        <Stack spacing={2} direction={"row"} > 
        <Card>
            <Box sx={{display:"flex" ,justifyContent:"space-around",marginTop:"20px"}}>
            <Typography variant="h6" sx={{color: "#50555E"}}>Total Businesses</Typography>
            <CirleSvgIcon />
            </Box>
            <Box sx={{display:"flex", padding:"18px"}}>
              <Typography variant="h5">56</Typography>  
            </Box>          
        </Card>

        <Card>
            <Box sx={{display:"flex" ,justifyContent:"space-around",marginTop:"20px"}}>
            <Typography variant="h6" sx={{color: "#50555E"}}>Total paymemts</Typography>
            <CirleSvgIcon />
            </Box>
            <Box sx={{display:"flex",padding:"18px"}}>
              <Typography  variant="h5">NGN 120,000,000</Typography>  
            </Box>          
        </Card>
        <Card>
            <Box sx={{display:"flex" ,justifyContent:"space-around",marginTop:"20px"}}>
            <Typography variant="h6" sx={{color: "#50555E"}}>Failed payment</Typography>
            <CirleSvgIcon />
            </Box>
            <Box sx={{display:"flex",padding:"18px"}}>
              <Typography  variant="h5">NGN 2,500,000</Typography>  
            </Box>          
        </Card>
        <Card>
            <Box sx={{display:"flex" ,justifyContent:"space-around",marginTop:"20px"}}>
            <Typography variant="h6" sx={{color: "#50555E"}}>Paymemts pending</Typography>
               <CirleSvgIcon />
            </Box>
            <Box sx={{display:"flex",padding:"18px" }}>
              <Typography  variant="h5">NGN 3,200,000</Typography>  
            </Box>          
        </Card>

        </Stack>
    )
}